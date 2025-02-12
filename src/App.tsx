import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { ThemeProvider } from './contexts/ThemeContext';
import { createTheme, CssBaseline } from '@mui/material';
import { ArticleProvider } from './contexts/ArticleContext';
import Article from './pages/Article';

const App: React.FC = () => {
  const [theme, setTheme] = useState(
    createTheme()
  );

  return (
    <ThemeProvider theme={theme} setTheme={setTheme}>
      <Router>
      <ArticleProvider>
      <CssBaseline /> {/* Aplica as configurações básicas de estilo */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Article/:id" element={<Article />} />
        </Routes>
    </ArticleProvider>
      </Router>
    </ThemeProvider>
  );
};

export default App;
