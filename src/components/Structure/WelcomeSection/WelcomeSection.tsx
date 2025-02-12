import React from 'react';
import { Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

const WelcomeSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Container
      component="header"
      sx={{
        background: indigo[900],
        color: theme.palette.text.primary,
        p: 2,
        mb: 4,
        borderBottomLeftRadius: 2,
        borderBottomRightRadius: 2,
      }}
      maxWidth={false}
    >
      <Typography variant="h5" gutterBottom>
        Hello Houston!
      </Typography>
      <Typography variant="body1">
        Get an overview of the latest Spaceflight news, from various sources! Based on <a href="https://spaceflightnewsapi.net/">Space Flightnews API</a>
      </Typography>
    </Container>
  );
};

export default WelcomeSection;