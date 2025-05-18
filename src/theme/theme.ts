import { createTheme } from '@mui/material/styles';

// Create a theme instance with modern design principles
const theme = createTheme({
  palette: {
    primary: {
      main: '#0B2447', // Deep navy blue - more sophisticated than previous blue
      light: '#19376D',
      dark: '#04152D',
      contrastText: '#fff',
    },
    secondary: {
      main: '#F86F03', // Vibrant orange - energetic and sports-oriented
      light: '#FFA41B',
      dark: '#E14D2A',
      contrastText: '#fff',
    },
    background: {
      default: '#F5F5F5',
      paper: '#fff',
    },
    text: {
      primary: '#1E1E1E',
      secondary: '#555555',
    },
    error: {
      main: '#D32F2F',
    },
    warning: {
      main: '#FFA41B',
    },
    info: {
      main: '#0288D1',
    },
    success: {
      main: '#388E3C',
    },
  },
  typography: {
    fontFamily: [
      'Montserrat',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h1: {
      fontWeight: 800,
      fontSize: '4rem',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontWeight: 700,
      fontSize: '3rem',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontWeight: 700,
      fontSize: '2.25rem',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      fontSize: '1.75rem',
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      fontSize: '1.5rem',
      lineHeight: 1.4,
    },
    h6: {
      fontWeight: 600,
      fontSize: '1.25rem',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.03em',
    },
    overline: {
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      fontWeight: 600,
      fontSize: '0.875rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 4,
          padding: '10px 24px',
          transition: 'all 0.3s ease',
          position: 'relative',
          overflow: 'hidden',
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            height: '0%',
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            transition: 'all 0.3s ease',
          },
          '&:hover::after': {
            height: '100%',
          },
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 6px 15px rgba(0,0,0,0.1)',
            transform: 'translateY(-3px)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: '0px 8px 20px rgba(0,0,0,0.06)',
          overflow: 'hidden',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0px 16px 30px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          '@media (min-width: 600px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          margin: '32px 0',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  shadows: [
    'none',
    '0px 2px 4px rgba(0,0,0,0.03)',
    '0px 4px 8px rgba(0,0,0,0.05)',
    '0px 6px 12px rgba(0,0,0,0.06)',
    '0px 8px 16px rgba(0,0,0,0.07)',
    '0px 10px 20px rgba(0,0,0,0.08)',
    '0px 12px 24px rgba(0,0,0,0.09)',
    '0px 14px 28px rgba(0,0,0,0.10)',
    '0px 16px 32px rgba(0,0,0,0.11)',
    '0px 18px 36px rgba(0,0,0,0.12)',
    '0px 20px 40px rgba(0,0,0,0.13)',
    '0px 22px 44px rgba(0,0,0,0.14)',
    '0px 24px 48px rgba(0,0,0,0.15)',
    '0px 26px 52px rgba(0,0,0,0.16)',
    '0px 28px 56px rgba(0,0,0,0.17)',
    '0px 30px 60px rgba(0,0,0,0.18)',
    '0px 32px 64px rgba(0,0,0,0.19)',
    '0px 34px 68px rgba(0,0,0,0.20)',
    '0px 36px 72px rgba(0,0,0,0.21)',
    '0px 38px 76px rgba(0,0,0,0.22)',
    '0px 40px 80px rgba(0,0,0,0.23)',
    '0px 42px 84px rgba(0,0,0,0.24)',
    '0px 44px 88px rgba(0,0,0,0.25)',
    '0px 46px 92px rgba(0,0,0,0.26)',
    '0px 48px 96px rgba(0,0,0,0.27)',
  ],
});

export default theme;
