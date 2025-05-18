import React, { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  Box, 
  Container, 
  IconButton, 
  Menu, 
  MenuItem, 
  useMediaQuery,
  useTheme,
  Slide,
  Avatar,
  Stack
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link as RouterLink } from 'react-router-dom';

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
    { label: 'Programs', path: '/programs' },
    { label: 'Facilities', path: '/facilities' },
    { label: 'Events', path: '/events' },
    { label: 'Gallery', path: '/gallery' },
    { label: 'About Us', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <Slide appear={false} direction="down" in={!scrolled}>
      <AppBar 
        position="fixed" 
        color="transparent" 
        sx={{ 
          boxShadow: scrolled ? 3 : 0,
          backdropFilter: 'blur(10px)',
          backgroundColor: scrolled ? 'rgba(11, 36, 71, 0.95)' : 'transparent',
          transition: 'all 0.3s ease',
          borderBottom: scrolled ? 'none' : '1px solid rgba(255,255,255,0.1)',
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ py: 1 }}>
            {/* Logo and Title */}
            <Stack direction="row" spacing={2} alignItems="center">
              <Avatar 
                sx={{ 
                  width: 48, 
                  height: 48, 
                  bgcolor: theme.palette.secondary.main,
                  display: { xs: 'none', md: 'flex' }
                }}
              >
                VS
              </Avatar>
              <Typography
                variant="h6"
                noWrap
                component={RouterLink}
                to="/"
                sx={{ 
                  mr: 2, 
                  display: 'flex', 
                  alignItems: 'center',
                  textDecoration: 'none',
                  color: 'white',
                  fontWeight: 700,
                  letterSpacing: '.1rem',
                  textTransform: 'uppercase',
                  fontSize: { xs: '1.1rem', md: '1.3rem' },
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    color: theme.palette.secondary.main,
                  }
                }}
              >
                Vendhan Sports Academy
              </Typography>
            </Stack>
            
            {/* Spacer */}
            <Box sx={{ flexGrow: 1 }} />
            
            {/* Desktop Navigation */}
            {!isMobile && (
              <Box sx={{ display: 'flex' }}>
                {menuItems.map((item) => (
                  <Button
                    key={item.label}
                    component={RouterLink}
                    to={item.path}
                    color="inherit"
                    sx={{ 
                      mx: 1, 
                      color: 'white',
                      position: 'relative',
                      fontWeight: 500,
                      fontSize: '0.95rem',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        width: '0%',
                        height: '2px',
                        backgroundColor: theme.palette.secondary.main,
                        transition: 'all 0.3s ease',
                        transform: 'translateX(-50%)',
                      },
                      '&:hover': {
                        backgroundColor: 'transparent',
                        '&::after': {
                          width: '80%',
                        }
                      }
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
                <Button
                  variant="contained"
                  color="secondary"
                  sx={{ 
                    ml: 3,
                    px: 3,
                    borderRadius: '50px',
                    fontWeight: 600,
                    boxShadow: '0 4px 14px 0 rgba(248, 111, 3, 0.39)',
                    '&:hover': {
                      boxShadow: '0 6px 20px 0 rgba(248, 111, 3, 0.5)',
                    }
                  }}
                  endIcon={<KeyboardArrowDownIcon />}
                  component={RouterLink}
                  to="/register"
                >
                  Join Now
                </Button>
              </Box>
            )}
            
            {/* Mobile Navigation */}
            {isMobile && (
              <>
                <IconButton
                  size="large"
                  edge="end"
                  color="inherit"
                  aria-label="menu"
                  onClick={handleMenuOpen}
                  sx={{ color: 'white' }}
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  open={Boolean(anchorEl)}
                  onClose={handleMenuClose}
                  keepMounted
                  PaperProps={{
                    sx: {
                      mt: 1.5,
                      backgroundColor: 'rgba(11, 36, 71, 0.95)',
                      backdropFilter: 'blur(10px)',
                      color: 'white',
                      borderRadius: 2,
                      minWidth: 180,
                    }
                  }}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                  {menuItems.map((item) => (
                    <MenuItem 
                      key={item.label} 
                      component={RouterLink} 
                      to={item.path}
                      onClick={handleMenuClose}
                      sx={{ 
                        py: 1.5,
                        '&:hover': {
                          backgroundColor: 'rgba(255,255,255,0.1)',
                        }
                      }}
                    >
                      {item.label}
                    </MenuItem>
                  ))}
                  <Box sx={{ px: 2, py: 2 }}>
                    <Button
                      variant="contained"
                      color="secondary"
                      fullWidth
                      sx={{ 
                        py: 1,
                        borderRadius: '50px',
                        fontWeight: 600,
                      }}
                      component={RouterLink}
                      to="/register"
                    >
                      Join Now
                    </Button>
                  </Box>
                </Menu>
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </Slide>
  );
};

export default Header;
