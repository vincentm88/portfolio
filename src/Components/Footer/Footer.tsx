import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import CopyrightIcon from '@mui/icons-material/Copyright';

interface Props {
  title: any,
}
function Footer(props: Props) {
  const { title } = props;
  const [style, setStyle] = useState({ opacity: 0, transition: '' });

  useEffect(() => {
    setTimeout(() => {
      setStyle({ opacity: 1, transition: ' opacity 1s' });
    }, 3000);
  }, []);

  return (
    <Box
      width="100%"
      paddingBottom={2}
      marginTop={'auto'}
    >
      <Stack id='footer' spacing={2} justifyContent="center" style={style}>

        <Stack direction="row" spacing={2} justifyContent="center">
          <Button variant="text" href='https://facebook.com/vincentm718'><FacebookIcon color="primary" /></Button>
          <Button variant="text" href='https://www.linkedin.com/in/vincentmartinez88/'><LinkedInIcon color="primary" /></Button>
          <Button variant="text" href='https://github.com/vincentm88'><GitHubIcon color="primary" /></Button>
          <Button variant="text" href='mailto:vincentm88@gmail.com'><EmailIcon color="primary"/></Button>
        </Stack>
        <Stack direction="row" spacing={2} justifyContent="center">
          <CopyrightIcon sx={{ alignSelf: 'center', fontSize: '1.2rem', paddingRight: '2px' }} /> {title} {new Date().getFullYear()}
        </Stack>
      </Stack>
    </Box>
  )
}

export default Footer