import React, { useState, useEffect } from 'react';
import { Box, Grid, CircularProgress, Button, FormControl, InputLabel, Select, MenuItem, TextField, FormControlLabel, Checkbox, Typography } from '@mui/material';
import { getData } from '../contexts/ArticleContext';
import ArticleCard from '../components/ArticleCard';
import Footer from '../components/Structure/Footer';
import Header from '../components/Structure/Header';
import WelcomeSection from '../components/Structure/WelcomeSection/WelcomeSection';

interface SortOption {
  value: string;
  label: string;
}

const HomePage: React.FC = () => {
  document.title = 'All articles | Infinity Space';

  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // Estados para filtros e ordenação
  const [selectedSort, setSelectedSort] = useState<string>('published_at');
  const [hasEvent, setHasEvent] = useState<boolean>(false);
  const [hasLaunch, setHasLaunch] = useState<boolean>(false);
  const [isFeatured, setIsFeatured] = useState<boolean>(false);
  const [publishedAfter, setPublishedAfter] = useState<string>('');
  const [searchPhrase, setSearchPhrase] = useState<string>('');

  const [showFilters, setShowFilters] = useState<boolean>(true); // Controle de visibilidade dos filtros

  const sortOptions: SortOption[] = [
    { value: 'published_at', label: 'Published At (Asc)' },
    { value: '-published_at', label: 'Published At (Desc)' },
    { value: 'updated_at', label: 'Updated At (Asc)' },
    { value: '-updated_at', label: 'Updated At (Desc)' },
  ];

  const loadArticles = async () => {
    setLoading(true);
    try {
      let url = 'articles';

      // adicionando os filtros à URL
      let filterParams = '';
      if (hasEvent) filterParams += `&has_event=true`;
      if (hasLaunch) filterParams += `&has_launch=true`;
      if (isFeatured) filterParams += `&is_featured=true`;
      if (publishedAfter) filterParams += `&published_at_gte=${publishedAfter}`;
      if (searchPhrase) filterParams += `&search=${searchPhrase}`;
      
      url += `?ordering=${selectedSort}${filterParams}`;

      const { data } = (await getData(url)) || {};
      setArticles(data?.results);
    } catch (error) {
      console.error('Error loading articles:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadArticles();
  }, [selectedSort, hasEvent, hasLaunch, isFeatured, publishedAfter, searchPhrase]);

  return (
    <>
      <Header />
      <WelcomeSection />
      <Box sx={{ padding: { xs: 2, sm: 4 }, marginTop: 2 }}>
        <Grid container spacing={3}>
           {/* Filtro de Texto - Pesquisa */}
           <Grid item xs={8} sm={8} md={8}>
                <TextField
                  label="Pesquisar"
                  value={searchPhrase}
                  onChange={(e) => setSearchPhrase(e.target.value)}
                  fullWidth
                  sx={{ marginBottom: 2 }}
                />
              </Grid>

              {/* Botão para alternar entre mostrar e esconder filtros */}
              <Grid item xs={4} sm={4} md={4}>
                <Button
                  variant="outlined"
                  onClick={() => setShowFilters(!showFilters)}
                  fullWidth
                >
                  {showFilters ? 'Esconder Filtros' : 'Ver Filtros'}
                </Button>
              </Grid>
          {/* Filtros no topo */}
          <Grid item xs={12}>
            <Box sx={{ display: showFilters ? 'block' : 'none', marginBottom: 2 }}>
              <Typography variant="h6" gutterBottom>Filtros</Typography>

              {/* Filtro de ordenação */}
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={6}>
                  <FormControl fullWidth sx={{ marginBottom: 2 }}>
                    <InputLabel id="sort-select-label">Ordenar por</InputLabel>
                    <Select
                      labelId="sort-select-label"
                      value={selectedSort}
                      onChange={(e) => setSelectedSort(e.target.value)}
                      label="Ordenar por"
                    >
                      {sortOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>

                {/* Filtro de Data - Publicado após */}
                <Grid item xs={12} sm={6} md={6}>
                  <TextField
                    label="Publicado após"
                    type="datetime-local"
                    value={publishedAfter}
                    onChange={(e) => setPublishedAfter(e.target.value)}
                    fullWidth
                    InputLabelProps={{
                      shrink: true,
                    }}
                    sx={{ marginBottom: 2 }}
                  />
                </Grid>
              </Grid>

              {/* Filtros booleanos */}
              <FormControlLabel
                control={
                  <Checkbox
                    checked={hasEvent}
                    onChange={(e) => setHasEvent(e.target.checked)}
                    name="hasEvent"
                  />
                }
                label="Tem evento"
                sx={{ marginBottom: 1 }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={hasLaunch}
                    onChange={(e) => setHasLaunch(e.target.checked)}
                    name="hasLaunch"
                  />
                }
                label="Tem lançamento"
                sx={{ marginBottom: 1 }}
              />

              <FormControlLabel
                control={
                  <Checkbox
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    name="isFeatured"
                  />
                }
                label="É destaque"
              />
            </Box>
          </Grid>

          {/* Lista de Artigos */}
          <Grid item xs={12}>
            <Box>
              {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <CircularProgress />
                </Box>
              ) : (
                <Grid container spacing={3}>
                  {articles?.map((article) => (
                    <ArticleCard article={article} key={article.id} />
                  ))}
                </Grid>
              )}
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default HomePage;
