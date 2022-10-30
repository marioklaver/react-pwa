import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material';
import './App.css';
import { CategoryPage, Homepage } from '@components/pages';

const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          color: '#fff',
          fontFamily: 'Google Sans, sans-serif',
          fontSize: '1.25rem',
          lineHeight: 1.3,
          fontWeight: 400,
          textTransform: 'inherit',
          '&.Mui-selected': {
            color: '#FFF',
          },
        },
      },
    },
  },
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
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/:category" element={<CategoryPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
