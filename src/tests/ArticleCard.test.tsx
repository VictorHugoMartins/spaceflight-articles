import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import ArticleCard from '../components/ArticleCard';
import { Article } from '../types';

const mockArticle: Article = {
    "id": 29221,
    "title": "Spire Global sues Kpler to complete maritime business sale",
    "authors": [
      {
        "name": "Jason Rainbow",
        "socials": {
          "x": "",
          "youtube": "",
          "instagram": "",
          "linkedin": "https://www.linkedin.com/in/jasonrainbow",
          "mastodon": "",
          "bluesky": ""
        }
      }
    ],
    "url": "https://spacenews.com/spire-global-sues-kpler-to-complete-maritime-business-sale/",
    "image_url": "https://i0.wp.com/spacenews.com/wp-content/uploads/2023/08/Artist_impression_of_Spire_satellite_constellation.jpg?fit=1000%2C536&quality=89&ssl=1",
    "news_site": "SpaceNews",
    "summary": "\nSpire Global has launched legal action to force Belgian analytics provider Kpler to complete its acquisition of the small satellite operator’s commercial ship-tracking business.\nThe post Spire Global sues Kpler to complete maritime business sale appeared first on SpaceNews.",
    "published_at": "2025-02-12T16:58:13Z",
    "updated_at": "2025-02-12T17:00:23.540343Z",
    "featured": false,
    "launches": [],
    "events": []
  };

describe('ArticleCard', () => {
  it('deve renderizar o título, resumo e autores', () => {
    render(
      <MemoryRouter>
        <ArticleCard article={mockArticle} />
      </MemoryRouter>
    );

    expect(screen.getByText('Spire Global sues Kpler to complete maritime business sale')).toBeInTheDocument();
    expect(screen.getByText("\nSpire Global has launched legal action to force Belgian analytics provider Kpler to complete its acquisition of the small satellite operator’s commercial ship-tracking business.\nThe post Spire Global sues Kpler to complete maritime business sale appeared first on SpaceNews.")).toBeInTheDocument();
    expect(screen.getByText('Published by Jason Rainbow')).toBeInTheDocument();
  });

  it('deve navegar para a página do artigo ao clicar no card', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <ArticleCard article={mockArticle} />
      </Router>
    );

    const card = screen.getByAltText(/image_29221/i);
    
    act(() => {
        fireEvent.click(card);
    });

    expect(history.location.pathname).toBe('/Article/29221');
  });
});
