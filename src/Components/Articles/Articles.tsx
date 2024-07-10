import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Articles.css'; // Create a CSS file for styling
import {
    Box,
    Button,
    Card,
    CardContent,
    CardMedia,
    CircularProgress,
    Container,
    Grid,
    Typography
  } from '@mui/material';
import Breadcrumbs from '../BreadCrumb/Breadcrumb';

// Define types for article and metadata
// Define types for article and metadata
interface Metadata {
    description?: string;
    image?: string;
  }
  
  interface Article {
    title: string;
    link: string;
    metadata?: Metadata;
  }
  
const Articles: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loadedArticles, setLoadedArticles] = useState<Article[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchedMetadata, setFetchedMetadata] = useState<Set<number>>(new Set());
  

  const articlesPerPage = 50;

  useEffect(() => {
    setIsLoading(true);
    // Fetch all articles initially
    const fetchAllArticles = async () => {
      try {
        const response = await axios.get<Article[]>('/api/article');
        setArticles(response.data);
        // Load metadata for the first batch of articles
        loadMoreArticles(response.data, 0, articlesPerPage);
      } catch (error) {
        console.error('Error fetching articles:', error);
      }

    };

    fetchAllArticles();
  }, []);

  const fetchMetadata = async (start: number, count: number, articles: Article[]): Promise<void> => {
    const articlesToLoad = articles.slice(start, start + count);

    for (let index = 0; index < articlesToLoad.length; index++) {
      const articleIndex = start + index;
      if (fetchedMetadata.has(articleIndex)) {
        setLoadedArticles((prevLoadedArticles) => [...prevLoadedArticles, articles[articleIndex]]);
        continue;
      }

      try {
        const metadataResponse = await axios.get<Metadata>(`/api/article/${articleIndex}`);
        setLoadedArticles((prevLoadedArticles) => [
          ...prevLoadedArticles,
          {
            ...articlesToLoad[index],
            metadata: metadataResponse.data,
          },
        ]);
        setFetchedMetadata((prevFetched) => new Set(prevFetched).add(articleIndex));
        // console.log(`Fetched metadata for article ${articleIndex}:`, metadataResponse.data);
      } catch (error) {
        console.error(`Error fetching metadata for article ${articleIndex}:`, error);
        setLoadedArticles((prevLoadedArticles) => [...prevLoadedArticles, articlesToLoad[index]]);
      }
    }
  };



  const loadMoreArticles = async (articlesList: Article[], startIndex: number, count: number) => {
    setIsLoading(true);
    
    fetchMetadata(startIndex, count, articlesList);
    setCurrentIndex(prevIndex => prevIndex + count);
    
    setIsLoading(false);
  };

  return (
    
    <Container maxWidth="md">
        <Breadcrumbs />
    <Box textAlign="center" my={4}>
      <Typography variant="h3" component="h1" gutterBottom>
        Sports News Aggregator
      </Typography>
    </Box>
    <Grid container spacing={4}>
      {loadedArticles.map((article, index) => (
        <Grid item xs={12} key={article.link}>
          <Card sx={{ display: 'flex', maxWidth: 540, mx: 'auto' }} className='article-card' onClick={() => window.open(article.link, '_blank')}>
            {article.metadata?.image && (
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={article.metadata.image}
                alt={article.title}
              />
            )}
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="h5" variant="h5">
                  {article.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {article.metadata?.description || 'No description available.'}
                </Typography>
              </CardContent>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
    
    {isLoading && (
      <Box display="flex" justifyContent="center" my={4}>
        <CircularProgress />
      </Box>
    )}
    <Box textAlign="center" my={4}>
      {currentIndex < articles.length && !isLoading && (
        <Button variant="contained" onClick={() => loadMoreArticles(articles, currentIndex, articlesPerPage)}>
          Load More
        </Button>
      )}
    </Box>
  </Container>
  );
};

export default Articles;
