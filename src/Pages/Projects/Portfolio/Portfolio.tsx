import { Box, Container, Typography, Paper, List, ListItem, ListItemText, Divider, Link } from '@mui/material';
import Breadcrumbs from "../../../Components/BreadCrumb/Breadcrumb";

const Portfolio: React.FC = () => {
    return (
      <Container maxWidth="md">
        <Breadcrumbs />
        <Box textAlign="center" my={4}>
          <Typography variant="h3" component="h1" gutterBottom>
            Portfolio Application
          </Typography>
        </Box>
        <Paper elevation={3} sx={{ padding: 3, marginBottom: 4 }}>
          <Typography variant="h5" component="h2" gutterBottom>
            Description:
          </Typography>
          <Typography variant="body1" paragraph>
            This Portfolio Application is built using React and TypeScript, I designed it to showcase some components from different projects I have worked on.
            It uses React Router, Axios, and Material UI.
            The application is self-hosted on a Linux machine (AlmaLinux 9) using Nginx,
            using reverse proxies to serve different projects and APIs dynamically.
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="body1" paragraph>
            This web app is a live demo of the application.
          </Typography>
          <Divider sx={{ marginY: 2 }} />
          <Link href="https://github.com/vincentm88/portfolio" target="_blank" rel="noopener" sx={{ marginY: 2 }}>
            You can check out the GitHub repo here and explore the code and/or deploy it yourself.
          </Link>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h5" component="h2" gutterBottom>
            Technologies Used:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="React" />
            </ListItem>
            <ListItem>
              <ListItemText primary="TypeScript" />
            </ListItem>
            <ListItem>
              <ListItemText primary="React Router" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Axios" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Material UI" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Nginx" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Docker" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Linux (AlmaLinux 9)" />
            </ListItem>
          </List>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h5" component="h2" gutterBottom>
            Features:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Displays project information in a card format" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fetches metadata for each project dynamically" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Live demos for projects through reverse proxies" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Responsive design with dark and light mode support" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Mostly mobile friendly" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Self-hosted on a Linux machine" />
            </ListItem>
          </List>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h5" component="h2" gutterBottom>
            Code Explanation:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Setting Up Routes: Uses React Router to define and manage routes for the application." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Fetching Project Data: Using Axios to make API calls and retrieve project data from self hosted projects as well as cloud hosted projects." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Theming: Implements Material UI's theming capabilities to support both light and dark modes." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Serving the Application: Uses Nginx to serve the React application and handle reverse proxying for some live demos." />
            </ListItem>
          </List>
          <Divider sx={{ marginY: 2 }} />
          <Typography variant="h5" component="h2" gutterBottom>
            Challenges and Learnings:
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Integrating TypeScript: Typescript is hard lol." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Reverse Proxy Setup: Configured Nginx to handle reverse proxies, so we can show some live project demos." />
            </ListItem>
            <ListItem>
              <ListItemText primary="Material UI: I usually use Bootstrap but I've been working with Material UI in some Flutter projects so i wanted to try it out with react." />
            </ListItem>
          </List>
        </Paper>
      </Container>
    );
};

export default Portfolio;
