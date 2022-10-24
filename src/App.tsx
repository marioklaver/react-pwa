import React from 'react';
import './App.css';
import { Homepage } from './components/pages/Homepage/Homepage';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
  typography: {
    h3: {
      fontFamily: 'Google Sans, sans-serif',
      fontSize: '1.25rem',
      lineHeight: 1.3,
      fontWeight: 400,
      color: '#1867DC',
    },
    h4: {
      fontFamily: 'Google Sans, sans-serif',
      fontSize: '1.25rem',
      lineHeight: 1.3,
      fontWeight: 400,
      color: '#1F1F1F',
    },
    h5: {
      fontFamily: 'Google Sans, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.25,
      fontWeight: 400,
      color: '#1f1f1f',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Homepage />
    </ThemeProvider>
  );
}

export default App;
