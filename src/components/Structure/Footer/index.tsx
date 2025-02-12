import React from 'react';
import { FaGithub, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import { Box, Typography, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';

type FooterProps = {};

const Footer: React.FC<FooterProps> = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        display: 'flex',
        alignItems: 'center',
        height: '15vh',
        minHeight: '120px',
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
        mt: '80px',
        justifyContent: 'space-between',
        px: 2,
        '@media only screen and (max-width: 850px)': {
          flexDirection: 'column',
          justifyContent: 'center',
          height: 'auto',
          mt: '40px',
        },
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          ml: 2,
          '@media only screen and (max-width: 850px)': {
            textAlign: 'center', // centralizando para telas menores
          },
        }}
      >
        Developed by Victor Hugo Martins
      </Typography>

      <Box
        id="contato"
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '180px',
          fontSize: '30px',
          position: 'relative',
          '@media only screen and (max-width: 850px)': {
            position: 'unset',
            mt: 2,
          },
        }}
      >
        <IconButton
          component="a"
          href="https://github.com/VictorHugoMartins/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.text.primary }}
        >
          <FaGithub />
        </IconButton>
        <IconButton
          component="a"
          href="mailto:vhmartins.contato@gmail.com"
          sx={{ color: theme.palette.text.primary }}
        >
          <FaEnvelope />
        </IconButton>
        <IconButton
          component="a"
          href="https://api.whatsapp.com/send?phone=55[31997436379]&text=Oi,%20Victor!"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: theme.palette.text.primary }}
        >
          <FaWhatsapp />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Footer;