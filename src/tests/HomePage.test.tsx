import React, { act } from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '../pages/HomePage';
import { getData } from '../contexts/ArticleContext';

// Mock dos componentes
jest.mock('../components/ArticleCard', () => () => <div>Mocked ArticleCard</div>);
jest.mock('../components/Structure/Header', () => () => <div>Mocked Header</div>);
jest.mock('../components/Structure/Footer', () => () => <div>Mocked Footer</div>);
jest.mock('../components/Structure/WelcomeSection/WelcomeSection', () => () => <div>Mocked WelcomeSection</div>);

jest.mock('../contexts/ArticleContext', () => ({
  getData: jest.fn(),
}));

describe('HomePage Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('deve renderizar Header, WelcomeSection e Footer', () => {
    render(<HomePage />);
    
    expect(screen.getByText('Mocked Header')).toBeInTheDocument();
    expect(screen.getByText('Mocked WelcomeSection')).toBeInTheDocument();
    expect(screen.getByText('Mocked Footer')).toBeInTheDocument();
  });

  test('deve mostrar o CircularProgress durante o carregamento', async () => {
    (getData as jest.Mock).mockResolvedValueOnce({ data: { results: [] } });

    render(<HomePage />);
    
    expect(screen.getByRole('progressbar')).toBeInTheDocument();
    
    await waitFor(() => {
      expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
  });

  test('deve renderizar ArticleCard para cada artigo', async () => {
    const mockArticles = {
      data: {
        results: [
          { id: 1, title: 'Article 1' },
          { id: 2, title: 'Article 2' },
        ],
      },
    };
    (getData as jest.Mock).mockResolvedValueOnce(mockArticles);

    render(<HomePage />);
    
    await waitFor(() => {
      expect(screen.getAllByText('Mocked ArticleCard')).toHaveLength(2);
    });
  });

  test('deve alterar os filtros e chamar loadArticles', async () => {
    (getData as jest.Mock).mockResolvedValue({ data: { results: [] } });

    render(<HomePage />);
    
    const searchInput = screen.getByLabelText('Pesquisar');
    act(() => {
        fireEvent.change(searchInput, { target: { value: 'SpaceX' } });
    });
      
    
    await waitFor(() => {
      expect(getData).toHaveBeenCalledWith(expect.stringContaining('search=SpaceX'));
    });
  });

  test('deve alternar a visibilidade dos filtros', () => {
    render(<HomePage />);
    
    const toggleButton = screen.getByText('Esconder Filtros');
    expect(screen.getByText('Filtros')).toBeVisible();

    act(() => {
        fireEvent.click(toggleButton);
    });
      
    expect(screen.queryByText('Filtros')).not.toBeVisible();
    
    act(() => {
        fireEvent.click(screen.getByText('Ver Filtros'));
    });      
    expect(screen.getByText('Filtros')).toBeVisible();
  });
});
