import React, { createContext, useState, ReactNode, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Article } from '../types';
import { api } from '../services/api';

// Contexto
interface ArticleContextType {
  article: Article | null;
  setArticle: React.Dispatch<React.SetStateAction<Article | null>>;
  loadArticle: (id: string) => Promise<void>;
}

export const ArticleContext = createContext<ArticleContextType | null>(null);

// Provider
interface ArticleProviderProps {
  children: ReactNode;
}

export const getData = async (url: string): Promise<any> => {
  try {
    const response = await api.get(url);
    return response;
  } catch (error) {
    console.error('Erro ao obter dados:', error);
    throw error;
  }
};

export const postData = async (url: string, data: any): Promise<any> => {
  try {
    const response = await api.post(url, data);
    return response;
  } catch (error) {
    console.error('Erro ao enviar dados:', error);
    throw error;
  }
};

export const ArticleProvider: React.FC<ArticleProviderProps> = ({ children }) => {
  const [article, setArticle] = useState<Article | null>(null);
  const navigate = useNavigate();

  const loadArticle = async (id: string) => {
    try {
      const response = await getData(`articles/${id}`);
      if (response && response.data) {
        setArticle(response.data);
      } else {
        console.error('Invalid response format:', response);
        navigate('/');
      }
    } catch (error) {
      console.error('Error loading article:', error);
      navigate('/');
    }
  };

  return (
    <ArticleContext.Provider value={{ article, setArticle, loadArticle }}>
      {children}
    </ArticleContext.Provider>
  );
};

// custom hook para consumir o contexto
export const useArticle = (): ArticleContextType => {
  const context = useContext(ArticleContext);
  if (context === null) {
    throw new Error('useArticle must be used within an ArticleProvider');
  }
  return context;
};