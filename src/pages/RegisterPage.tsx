import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function RegisterPage() {
  return (
    <div>
      <h1>Welcome to the RegisterPage</h1>
      <Button component={Link} to="/" variant="contained">
        Go to HomePage
      </Button>
    </div>
  );
}

export { RegisterPage };