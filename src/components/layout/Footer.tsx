import React from 'react';
import { Box, Container, Typography, Link, Grid, useTheme } from '@mui/material';

const Footer: React.FC = () => {
  const theme = useTheme();
  
  return (
    <Box 
      component="footer" 
      sx={{ 
        bgcolor: theme.palette.primary.main,
        color: 'white',
        py: 6,
        mt: 'auto'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 4' } }}>
            <Typography variant="h6" gutterBottom>
              Vendhan Sports Academy
            </Typography>
            <Typography variant="body2">
              Providing world-class sports training and facilities since 2010.
            </Typography>
          </Grid>
          
          <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 4' } }}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Oddanchatram, Tamil Nadu<br />
              India<br />
              <Link href="tel:+918608649937" color="inherit">
                8608649937
              </Link>,{' '}
              <Link href="tel:+919566672112" color="inherit">
                9566672112
              </Link>
            </Typography>
          </Grid>
          
          <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 4' } }}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Link href="/programs" color="inherit" display="block" sx={{ mb: 1 }}>
              Programs
            </Link>
            <Link href="/facilities" color="inherit" display="block" sx={{ mb: 1 }}>
              Facilities
            </Link>
            <Link href="/events" color="inherit" display="block" sx={{ mb: 1 }}>
              Events
            </Link>
            <Link href="/contact" color="inherit" display="block">
              Contact
            </Link>
          </Grid>
        </Grid>
        
        <Box mt={5}>
          <Typography variant="body2" align="center">
            © {new Date().getFullYear()} Vendhan Sports Academy. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
