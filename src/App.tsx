import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import theme from './theme/theme';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './components/home/HomePage';

// Sample programs data
const samplePrograms = [
  {
    id: 1,
    title: "Cricket Academy",
    description: "Professional cricket training for all age groups",
    imageUrl: "/images/cricket.jpg"
  },
  {
    id: 2,
    title: "Tennis Program",
    description: "Learn tennis from certified coaches",
    imageUrl: "/images/tennis.jpg"
  },
  {
    id: 3,
    title: "Swimming Classes",
    description: "Swimming lessons for beginners to advanced",
    imageUrl: "/images/swimming.jpg"
  },
  {
    id: 4,
    title: "Badminton Training",
    description: "Expert badminton coaching for all levels",
    imageUrl: "/images/badminton.jpg"
  }
];

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Box sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          minHeight: '100vh'
        }}>
          <Header />
          <Box component="main" sx={{ flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<HomePage programs={samplePrograms} />} />
              {/* Add more routes as needed */}
              <Route path="*" element={<HomePage programs={samplePrograms} />} />
            </Routes>
          </Box>
          <Footer />
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
