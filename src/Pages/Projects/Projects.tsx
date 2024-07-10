import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from '@mui/material';
import Breadcrumbs from '../../Components/BreadCrumb/Breadcrumb';

const projects = [
  {
    name: "Portfolio",
    image: "/images/vince.jpg",
    description: "This Portfolio Application is built using React and TypeScript, I designed it to showcase some...",
    route: "/projects/portfolio",
  },
  {
    name: "News Aggregator",
    image: "/images/lebronjames.jpg",
    description: "The News Aggregator is a web application built with Flask that fetches article titles and...",
    route: "/projects/sports-news-aggregator",
  },
];

const Projects: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Breadcrumbs />
      <Box textAlign="center" my={4}>
        <Typography variant="h3" component="h1" gutterBottom>
          Projects
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} key={project.name}>
            <Card
              sx={{ display: 'flex', maxWidth: 540, mx: 'auto' }}
              className='article-card'
              onClick={() => navigate(project.route)}
            >
              {project.image && (
                <CardMedia
                  component="img"
                  sx={{ width: 151 }}
                  image={project.image}
                  alt={project.name}
                />
              )}
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="h5" variant="h5">
                    {project.name}
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary">
                    {project.description || 'No description available.'}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
            <Divider sx={{ marginY: 4 }} />
                
          <Box textAlign="center" my={4}>
            <Typography variant="h5" component="h1" gutterBottom>
              More Coming Soon!
            </Typography>
          </Box>
    </Container>
  );
};

export default Projects;
