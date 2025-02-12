import React from 'react';
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Article } from '../../types';

type ArticleCardProps = { article: Article };

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  const navigate = useNavigate();

  const handleOpenArticle = (id: number) => {
    navigate(`/Article/${id}`);
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={article.id}>
      <Card
        sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
        onClick={() => handleOpenArticle(article.id)}
      >
        <CardMedia
          component="img"
          height="140"
          image={article.image_url}
          alt={`image_${article.id}`}
        />
        <CardContent>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              {article.title}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {article.summary}
          </Typography>
          { article?.authors?.length > 0 &&
            <span>
              Published by{' '}
              {article.authors.map((author) => author.name).join(', ')}
            </span>
          }
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ArticleCard;
