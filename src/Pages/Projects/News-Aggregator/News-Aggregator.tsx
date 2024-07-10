import Articles from "../../../Components/Articles/Articles";
import { Box, Container, Grid, Typography, Paper, List, ListItem, ListItemText, Divider, Button, Link } from '@mui/material';

import { useNavigate } from 'react-router-dom';
import Breadcrumbs from "../../../Components/BreadCrumb/Breadcrumb";


const NewsAggregator: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md">
      <Breadcrumbs />
      <Box textAlign="center" my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Article Scraper
        </Typography>
      </Box>
      <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
        <Typography variant="h5" component="h2" gutterBottom>
          Description:
        </Typography>
        <Typography variant="body1" paragraph>
        The News Aggregator is a web application built with Flask that fetches article titles and links using selectors from a config file.
        The main function is the fetch_articles() function that gets the site, url, and selectors from the config file and calls the fetch_article_html() function.
        The fetch_article_html() function gets the HTML content of the site and extracts the title and link from the provided selectors using BeautifulSoup.
        We then pass that data back to the requesting route.
        The three routes include the index, article, and article/index where index is the index of the article.
        We can then use the index to get the article metadata from the articles og metadata tags.
        We are not saving or caching data as that was beyond the scope of this project.
        The Flask application can then be deployed to a web server.
        In our case we are using Docker to containerize the application and run it on a Linux server as a reverse proxy using nginx for this application and then consuming the json from the article and article/index routes to display the info into cards on our react page using typescript.
        </Typography>
        <Divider sx={{ marginY: 2 }} />
        <Link onClick={() => navigate('/projects/sports-news-aggregator/demo')}>
        Click here for a live demo.
        </Link>
        <Divider sx={{ marginY: 2 }} />
        
        <Link href="https://github.com/vincentm88/sports-headlines-aggregator" target="_blank" rel="noopener" sx={{ marginY: 2 }}>
        You can check out the github repo here and run the container or flask app yourself. Changing the sites and selectors will get you the list of links you are looking for.
        </Link>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h5" component="h2" gutterBottom>
          Technologies Used:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Python" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Flask" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Requests" />
          </ListItem>
          <ListItem>
            <ListItemText primary="BeautifulSoup" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Javascript" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Bootstrap" />
          </ListItem>
          <ListItem>
            <ListItemText primary="*We also consume the json data into this react application using typescript display the data into cards using Material UI." />
          </ListItem>
        </List>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h5" component="h2" gutterBottom>
          Features:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Fetches data from a specified URL" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Parses HTML to extract links based on provided selectors" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Gets open graph metadata for each article" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Serves all articles and metadata in JSON" />
          </ListItem>
          <ListItem>
            <ListItemText primary="Has an index page for demonstration" />
          </ListItem>
        </List>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h5" component="h2" gutterBottom>
          Code Explanation:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Fetching the Web Page: Uses requests to get the HTML content of the page." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Parsing HTML: Uses BeautifulSoup to parse the HTML content." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Extracting Data: Using the provdided selectors, we extract the data from the HTML content." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Serving Data: We serve the data in JSON format." />
          </ListItem>
          <ListItem>
            <ListItemText primary="Index Page: We display the data in a card format using Bootstrap 5 and Javascript to load more articles and updated metadata" />
          </ListItem>
        </List>
        <Divider sx={{ marginY: 2 }} />
        <Typography variant="h5" component="h2" gutterBottom>
          Challenges and Learnings:
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="I've used BeatuifulSoup to parse the HTML content pleanty of time so this was actually a simple demonstration of that but finding selectors is always a pain" />
          </ListItem>
          <ListItem>
            <ListItemText primary="The hardest part was consuming the json data from the flask application with typescript in the react application" />
          </ListItem>
        </List>
      </Paper>
    </Container>
  );
};

export default NewsAggregator;
