import React from 'react';
import { Typography, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const WelcomeSection: React.FC = () => {
  const theme = useTheme();

  return (
    <Container
      component="header"
      sx={{
        background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
        color: theme.palette.text.primary,
        p: 2,
        mb: 4,
      }}
      maxWidth={false}
    >
      <Typography variant="h5" gutterBottom>
        Hello Houston!
      </Typography>
      <Typography variant="body1">
        Get an overview of the latest Spaceflight news, from various sources!
      </Typography>
    </Container>
  );
};

export default WelcomeSection;
