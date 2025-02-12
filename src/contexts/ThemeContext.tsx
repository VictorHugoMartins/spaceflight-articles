import React, { createContext, ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { Theme } from '@mui/material/styles';

interface ThemeContextProps {
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  theme: Theme;
  setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme, setTheme }) => {
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={theme}>
        {children}
      </MuiThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };