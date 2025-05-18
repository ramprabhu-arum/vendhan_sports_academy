import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Link, 
  Grid, 
  useTheme, 
  Stack, 
  IconButton, 
  Divider,
  Button,
  TextField,
  InputAdornment
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import SendIcon from '@mui/icons-material/Send';

const Footer: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: theme.palette.primary.main,
        color: 'white',
        pt: 10,
        pb: 4,
        mt: 'auto',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: 'radial-gradient(circle at 20% 25%, rgba(41, 98, 255, 0.15) 0%, rgba(11, 36, 71, 0) 50%)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={6}>
          <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 4' } }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography 
                variant="h4" 
                gutterBottom 
                sx={{ 
                  fontWeight: 800,
                  mb: 3,
                  background: `linear-gradient(90deg, #FFFFFF 0%, ${theme.palette.secondary.light} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Vendhan Sports Academy
              </Typography>
              <Typography variant="body1" sx={{ mb: 4, opacity: 0.8, maxWidth: 350 }}>
                Providing world-class sports training and facilities since 2010. Discover your potential with our expert coaching and state-of-the-art facilities.
              </Typography>
              
              <Stack direction="row" spacing={1} sx={{ mb: 4 }}>
                <IconButton 
                  color="inherit" 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: theme.palette.secondary.main,
                    }
                  }}
                >
                  <FacebookIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: theme.palette.secondary.main,
                    }
                  }}
                >
                  <InstagramIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: theme.palette.secondary.main,
                    }
                  }}
                >
                  <TwitterIcon />
                </IconButton>
                <IconButton 
                  color="inherit" 
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)',
                    '&:hover': {
                      bgcolor: theme.palette.secondary.main,
                    }
                  }}
                >
                  <YouTubeIcon />
                </IconButton>
              </Stack>
            </Box>
          </Grid>
          
          <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 2' } }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Quick Links
              </Typography>
              <Stack spacing={1.5}>
                <Link 
                  component={RouterLink} 
                  to="/programs" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      color: theme.palette.secondary.light,
                      pl: 1,
                    }
                  }}
                >
                  Programs
                </Link>
                <Link 
                  component={RouterLink} 
                  to="/facilities" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      color: theme.palette.secondary.light,
                      pl: 1,
                    }
                  }}
                >
                  Facilities
                </Link>
                <Link 
                  component={RouterLink} 
                  to="/events" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      color: theme.palette.secondary.light,
                      pl: 1,
                    }
                  }}
                >
                  Events
                </Link>
                <Link 
                  component={RouterLink} 
                  to="/gallery" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      color: theme.palette.secondary.light,
                      pl: 1,
                    }
                  }}
                >
                  Gallery
                </Link>
                <Link 
                  component={RouterLink} 
                  to="/about" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      color: theme.palette.secondary.light,
                      pl: 1,
                    }
                  }}
                >
                  About Us
                </Link>
                <Link 
                  component={RouterLink} 
                  to="/contact" 
                  color="inherit" 
                  sx={{ 
                    textDecoration: 'none',
                    opacity: 0.8,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      opacity: 1,
                      color: theme.palette.secondary.light,
                      pl: 1,
                    }
                  }}
                >
                  Contact
                </Link>
              </Stack>
            </Box>
          </Grid>
          
          <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 3' } }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Contact Us
              </Typography>
              <Stack spacing={3}>
                <Stack direction="row" spacing={2}>
                  <LocationOnIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Oddanchatram, Tamil Nadu, India
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <PhoneIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    <Link href="tel:+918608649937" color="inherit" sx={{ textDecoration: 'none' }}>
                      8608649937
                    </Link>,{' '}
                    <Link href="tel:+919566672112" color="inherit" sx={{ textDecoration: 'none' }}>
                      9566672112
                    </Link>
                  </Typography>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <AccessTimeIcon sx={{ color: theme.palette.secondary.main }} />
                  <Typography variant="body2" sx={{ opacity: 0.8 }}>
                    Morning: 6:00 AM - 9:30 AM<br />
                    Evening: 4:00 PM - 8:00 PM
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Grid>
          
          <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 3' } }}>
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Newsletter
              </Typography>
              <Typography variant="body2" sx={{ mb: 3, opacity: 0.8 }}>
                Subscribe to our newsletter for updates on programs, events, and special offers.
              </Typography>
              <Box component="form" noValidate>
                <TextField
                  fullWidth
                  placeholder="Your email address"
                  variant="outlined"
                  sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      '& fieldset': {
                        borderColor: 'rgba(255,255,255,0.2)',
                      },
                      '&:hover fieldset': {
                        borderColor: 'rgba(255,255,255,0.3)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.secondary.main,
                      },
                    },
                    '& .MuiInputLabel-root': {
                      color: 'rgba(255,255,255,0.7)',
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton 
                          edge="end" 
                          color="secondary"
                          sx={{ 
                            bgcolor: theme.palette.secondary.main,
                            color: 'white',
                            '&:hover': {
                              bgcolor: theme.palette.secondary.dark,
                            }
                          }}
                        >
                          <SendIcon />
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button 
                  variant="contained" 
                  color="secondary" 
                  fullWidth
                  sx={{ 
                    py: 1.5,
                    fontWeight: 600,
                  }}
                >
                  Subscribe
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 6, borderColor: 'rgba(255,255,255,0.1)' }} />
        
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="body2" align="center" sx={{ opacity: 0.7 }}>
            © {new Date().getFullYear()} Vendhan Sports Academy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
