import * as React from 'react';
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
import DownloadIcon from '@mui/icons-material/Download';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import resumePDF from '../../Files/2023 Vincent Martinez Dev Resume.pdf';

interface Props {
    colorMode: any,
    theme: any,
    title: string
}

function Navbar(props: Props) {
    const { colorMode, theme, title } = props;
    const [openNav, setOpenNav] = React.useState(false);
    const downloadResumeButtonClick = ()=>{
        fetch(resumePDF).then((response) => {            
            response.blob().then((blob) => {
                const fileURL =
                    window.URL.createObjectURL(blob);
                let alink = document.createElement("a");
                alink.href = fileURL;
                alink.download = resumePDF;
                alink.click();
            });
        });
    }

    const toggleDrawer =
        (openNav: boolean) =>
            (event: React.KeyboardEvent | React.MouseEvent) => {
                setOpenNav(prevState => !prevState);
            };

    const list = (openNav: boolean) => (
        <Box
            role="presentation"
            onClick={toggleDrawer(openNav)}
            onKeyDown={toggleDrawer(openNav)}        >
            <List>
                {['Download Resume'].map((text, index) => (
                    <ListItem key={text}>
                        <ListItemButton onClick={downloadResumeButtonClick}>
                            <ListItemIcon>
                                <DownloadIcon />
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color='transparent' elevation={0}>
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

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        <IconButton sx={{ ml: 1 }} onClick={colorMode.toggleColorMode} color="inherit">
                            {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                        </IconButton>
                    </Toolbar>
                </AppBar>
            </Box>

            <div>
                <React.Fragment >
                    <Drawer
                        open={openNav}
                        onClose={toggleDrawer(openNav)}
                    >
                        {list(openNav)}
                    </Drawer>
                </React.Fragment>
            </div>

        </div>



    )
}

export default Navbar


