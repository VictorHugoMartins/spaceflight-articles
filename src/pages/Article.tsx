import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';
import { Container, Grid, Typography, Button, Box, Paper } from '@mui/material';
import { useArticle } from '../contexts/ArticleContext';
import Header from '../components/Structure/Header';
import Footer from '../components/Structure/Footer';

const Article: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { article, loadArticle } = useArticle();

  useEffect(() => {
    if (article) {
      document.title = `${article?.title} | Infinity Space`;
    } else {
      document.title = `Article | Infinity Space`;
    }
  }, [article]);

  useEffect(() => {
    if ( id ) loadArticle(id.toString());
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Header />
      <Container id="article-page" maxWidth="lg" sx={{ mt: 4 }}>
        <Box id="breadcrumb" sx={{ mb: 2 }}>
          <Link to="/">Articles</Link>
          <FaChevronRight size={10} />
          <Link to="/">{article.title}</Link>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} sx={{ p: 2 }}>
              <img
                src={article.image_url}
                alt={article.title}
                style={{ width: '100%', height: 'auto' }}
              />
              <Typography variant="h6" sx={{ mt: 2 }}>
                Summary
              </Typography>
              <Typography variant="body1">{article.summary}</Typography>
              <Button
                variant="contained"
                color="primary"
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                sx={{ mt: 2 }}
              >
                Read Full Article
              </Button>
            </Paper>
          </Grid>

          <Grid item xs={12} md={8}>
            <Box id="article-details" sx={{ mb: 4 }}>
              <Typography variant="h4">{article.title}</Typography>
              <Typography variant="body1" sx={{ mt: 2 }}>
                Published by{' '}
                <strong>{article.authors?.map((author: any) => author.name).join(', ')}</strong> on{' '}
                {new Date(article.published_at).toLocaleDateString()}
              </Typography>
              <Box className="article-meta" sx={{ mt: 2 }}>
                <Typography variant="body2">News Site: {article.news_site}</Typography>
                <Typography variant="body2">
                  Last Updated: {new Date(article.updated_at).toLocaleDateString()}
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default Article;
