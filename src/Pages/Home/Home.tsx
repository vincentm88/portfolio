import React from 'react'
import Container from '@mui/material/Container';
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import TypeText from '../../Components/TypingText/TypingText';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(0),
    margin: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary
}));

function Home() {
    const [imgStyle, setImgStyle] = useState({ opacity: 0, transition: '' })
    const [mainStyle, setMainStyle] = useState({ opacity: 0, transition: '' })
    const words = ['Front-End Developer', 'Back-End Developer', 'Full-Stack Developer', "Software Developer"];
    const title = "Hi I'm Vince";

    useEffect(() => {
        setTimeout(() => {
            setMainStyle({ opacity: 1, transition: ' opacity 1s' });
        }, 1000);
        setTimeout(() => {
            setImgStyle({ opacity: 1, transition: ' opacity 1s' });
        }, 2000);
    }, []);
    return (
        <Container maxWidth="lg">
            <Grid container spacing={2} minHeight="600px" >
                <Grid xs={12} md={6} sx={{ alignSelf: 'center' }}>
                    <Item elevation={0} style={mainStyle}>
                        <h1>{title}</h1>
                        <h3>
                            I am a <TypeText words={words} />
                        </h3>
                    </Item>
                </Grid>
                <Grid xs={12} md={6}>

                    <Item id='imgItem' elevation={1} style={imgStyle}>
                        <ImageList cols={1}  >
                            <ImageListItem >
                                <img src="/images/vince.jpg" alt="Logo" loading="lazy" />
                            </ImageListItem>
                        </ImageList>
                    </Item>

                </Grid>
            </Grid>
        </Container>

    )
}

export default Home