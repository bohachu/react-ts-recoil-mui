import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import EmailForm from '../components/EmailForm';

const TrialPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        p: 2,
      }}
    >
      <Container maxWidth="md" sx={{ width: '100%' }}>
        <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h4" sx={{ mb: 4, fontWeight: 'bold' }}>
            Product Trial
          </Typography>
          <EmailForm />
        </Box>
      </Container>
    </Box>
    </div>
  );
};

export default TrialPage;
