import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { styled } from '@mui/material/styles';


const StyledGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    padding: theme.spacing(2),
  },
}));

function RegisterPage() {
  return (
      <StyledGrid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6} md={4}>
          <form>
            <h1>Register</h1>
            <TextField
              required
              fullWidth
              margin="normal"
              label="Username"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              margin="normal"
              type="password"
              label="Password"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              margin="normal"
              type="email"
              label="Email"
              variant="outlined"
            />
            <Button fullWidth variant="contained" type="submit">
              Register
            </Button>
          </form>
          <Button component={Link} to="/" fullWidth>
            Go to HomePage
          </Button>
        </Grid>
      </StyledGrid>
  );
}

export { RegisterPage };
