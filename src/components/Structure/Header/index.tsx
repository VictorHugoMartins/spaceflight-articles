import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import ThemeChanger from '../ThemeChanger/ThemeChanger';

const Header: React.FC = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: theme.palette.primary.main }}>
      <Container>
        <Toolbar disableGutters>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{
              flexGrow: 1, 
              color: theme.palette.text.primary,
            }}
          >
            <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
              Infinity Space
            </Link>
          </Typography>
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <ThemeChanger />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
