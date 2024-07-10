import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import InfoIcon from '@mui/icons-material/Info';
import MailIcon from '@mui/icons-material/Mail';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface Props {
  colorMode: any;
  theme: any;
  title: string;
}

const routes = [
    { name: "Home", icon: <HomeIcon /> },
    { name: "Projects", icon: <WorkIcon /> },
    // { name: "About", icon: <InfoIcon /> },
    // { name: "Contact", icon: <MailIcon /> }
  ];

function Navbar(props: Props) {
  const { colorMode, theme, title } = props;
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();

  const toggleDrawer =
    (open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      setOpenNav(!openNav);
    };

  const handleNavigation = (route: string) => {
    navigate(route === "Home" ? "/" : `/${route.toLowerCase()}`);
    setOpenNav(false);
  };

  const list = (open: boolean) => (
    <Box
      role="presentation"
      onClick={toggleDrawer(open)}
      onKeyDown={toggleDrawer(open)}
    >
      <List>
        {routes.map((route) => (
          <ListItem key={route.name}>
            <ListItemButton onClick={() => handleNavigation(route.name)}>
              <ListItemIcon>
                {route.icon}
              </ListItemIcon>
              <ListItemText primary={route.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer(openNav)}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => handleNavigation("Home")} style={{ cursor: 'pointer' }}>
              {title}
            </Typography>
            <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
              {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Toolbar>
        </AppBar>
      </Box>

      <React.Fragment>
        <Drawer open={openNav} onClose={toggleDrawer(openNav)}>
          {list(openNav)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default Navbar;
