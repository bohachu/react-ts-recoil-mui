import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function HomePage() {
  return (
    <div>
      <h1>Welcome to the Homepage</h1>
      <Button component={Link} to="/register" variant="contained">
        Go to Register
      </Button>
    </div>
  );
}

export { HomePage };