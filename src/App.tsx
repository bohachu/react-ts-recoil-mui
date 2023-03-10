import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { HomePage } from './pages/HomePage';
import { RegisterPage } from './pages/RegisterPage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TrialPage from './pages/TrialPage';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <RecoilRoot>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/trial" element={<TrialPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </RecoilRoot>
  );
}

export default App;
