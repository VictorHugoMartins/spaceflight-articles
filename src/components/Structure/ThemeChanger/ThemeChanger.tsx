import React, { useContext } from 'react';
import { Button } from '@mui/material';
import { createTheme } from '@mui/material';
import { ThemeContext } from '../../../contexts/ThemeContext';

const customColors = {
  alabaster: '#E8EBE4',
  frenchGray: '#D2D5DD',
  coolGray: '#999AC6',
  raisinBlack: '#171829',
  black: '#07070F',
  battleshipGray: '#798071',
  secondaryText: '#B8BACF',
  highlight: '#4A90E2', // azul de destaque adicional
  danger: '#FF5733',
  success: '#28A745',
};

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
            main: customColors.coolGray,
          },
          secondary: {
            main: customColors.battleshipGray,
          },
          background: {
            default: newMode === 'dark' ? customColors.black : customColors.alabaster,
            paper: newMode === 'dark' ? customColors.raisinBlack : customColors.frenchGray,
          },
          text: {
            primary: newMode === 'dark' ? customColors.alabaster : customColors.raisinBlack,
            secondary: newMode === 'dark' ? customColors.secondaryText : customColors.black,
          },
        },
        typography: {
          fontFamily: 'Roboto, Arial, sans-serif',
          fontSize: 14,
          h1: {
            color: newMode === 'dark' ? customColors.coolGray : customColors.black,
          },
          h2: {
            color: newMode === 'dark' ? customColors.secondaryText : customColors.raisinBlack,
          },
        },
        components: {
          MuiButton: {
            styleOverrides: {
              root: {
                backgroundColor: customColors.coolGray,
                color: customColors.alabaster,
                '&:hover': {
                  backgroundColor: customColors.battleshipGray,
                },
              },
            },
          },
        },
      });
    });
  };

  return (
    <Button onClick={toggleTheme} variant="contained" color="primary">
      {theme.palette.mode === 'dark' ? 'Modo Claro' : 'Modo Escuro'}
    </Button>
  );
};

export default ThemeChanger;
