import React, { useContext } from 'react';
import { IconButton } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeContext } from '../../../contexts/ThemeContext';
import { Brightness4, Brightness7 } from '@mui/icons-material';

const ThemeChanger: React.FC = () => {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('ThemeContext must be used within a ThemeProvider');
  }

  const { theme, setTheme } = context;

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newMode = prevTheme.palette.mode === 'dark' ? 'light' : 'dark';

      return createTheme({
        palette: {
          mode: newMode,
          primary: {
            main: newMode === 'dark' ? '#90caf9' : '#1976d2',
          },
          secondary: {
            main: newMode === 'dark' ? '#f48fb1' : '#9c27b0',
          },
          background: {
            default: newMode === 'dark' ? '#121212' : '#ffffff',
            paper: newMode === 'dark' ? '#1e1e1e' : '#f5f5f5',
          },
          text: {
            primary: newMode === 'dark' ? '#ffffff' : '#000000',
            secondary: newMode === 'dark' ? '#bdbdbd' : '#616161',
          },
        },
        typography: {
          fontFamily: 'Roboto, Arial, sans-serif',
          fontSize: 14,
          h1: {
            color: newMode === 'dark' ? '#90caf9' : '#1976d2',
          },
          h2: {
            color: newMode === 'dark' ? '#f48fb1' : '#9c27b0',
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor: newMode === 'dark' ? '#90caf9' : '#1976d2',
                color: '#ffffff',
                '&:hover': {
                  backgroundColor: newMode === 'dark' ? '#42a5f5' : '#1565c0',
                },
              },
            },
          },
        },
      });
    });
  };

  return (
    <IconButton onClick={toggleTheme} color="inherit">
      {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
    </IconButton>
  );
};

export default ThemeChanger;
