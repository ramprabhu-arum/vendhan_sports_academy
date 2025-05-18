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
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Vendhan Sports Academy
            </Typography>
            <Typography variant="body2">
              Providing world-class sports training and facilities since 2010.
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              123 Sports Avenue<br />
              Chennai, Tamil Nadu 600001<br />
              India<br />
              <Link href="mailto:info@vendhansports.com" color="inherit">
                info@vendhansports.com
              </Link><br />
              <Link href="tel:+919876543210" color="inherit">
                +91 98765 43210
              </Link>
            </Typography>
          </Grid>
          
          <Grid item xs={12} sm={4}>
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
