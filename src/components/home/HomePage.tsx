import React from 'react';
import Grid from '@mui/material/Grid';
import {
  Card,
  CardMedia,
  CardContent,
  Box,
  Typography,
  Container,
  Button,
  useTheme
} from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Program {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const HomePage: React.FC<{ programs: Program[] }> = ({ programs }) => {
  const theme = useTheme();
  
  // Carousel settings
  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Box>
      {/* Hero Carousel Section */}
      <Box sx={{ mb: 6 }}>
        <Slider {...carouselSettings}>
          {/* Replace these with actual images */}
          <Box>
            <Box 
              sx={{ 
                height: { xs: '50vh', md: '70vh' },
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/placeholder-hero1.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ textAlign: 'center', color: 'white', p: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                  Welcome to Vendhan Sports Academy
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }}>
                  Nurturing champions of tomorrow
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  href="/programs"
                >
                  Explore Programs
                </Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box 
              sx={{ 
                height: { xs: '50vh', md: '70vh' },
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/placeholder-hero2.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ textAlign: 'center', color: 'white', p: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                  State-of-the-Art Facilities
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }}>
                  Train with the best equipment and infrastructure
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  href="/facilities"
                >
                  View Facilities
                </Button>
              </Box>
            </Box>
          </Box>
          <Box>
            <Box 
              sx={{ 
                height: { xs: '50vh', md: '70vh' },
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(/placeholder-hero3.jpg)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Box sx={{ textAlign: 'center', color: 'white', p: 4 }}>
                <Typography variant="h2" component="h1" gutterBottom>
                  Expert Coaching
                </Typography>
                <Typography variant="h5" sx={{ mb: 4 }}>
                  Learn from experienced professionals and former athletes
                </Typography>
                <Button 
                  variant="contained" 
                  color="secondary" 
                  size="large"
                  href="/about"
                >
                  Meet Our Coaches
                </Button>
              </Box>
            </Box>
          </Box>
        </Slider>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h2" gutterBottom>
            About Vendhan Sports Academy
          </Typography>
          <Typography variant="body1" sx={{ maxWidth: '800px', mx: 'auto' }}>
            Established in 2010, Vendhan Sports Academy has been at the forefront of sports education and training in India. 
            Our mission is to discover, nurture, and develop sporting talent across various disciplines. 
            With world-class facilities and expert coaching, we provide the perfect environment for athletes to excel.
          </Typography>
        </Box>
      </Container>

      {/* Programs Section */}
      <Grid container spacing={4}>
        {programs.map((program) => (
          <Grid xs={12} sm={6} md={3} key={program.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={program.imageUrl}
                alt={program.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h3">
                  {program.title}
                </Typography>
                <Typography>
                  {program.description}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button size="small" color="primary" href={`/programs/${program.id}`}>
                  Learn More
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Facilities Section */}
      <Grid container spacing={4}>
        <Grid xs={12} md={6}>
          <Box sx={{ height: '100%' }}>
            <img 
              src="/placeholder-facilities.jpg" 
              alt="Sports facilities" 
              style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
            />
          </Box>
        </Grid>
        <Grid xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'center' }}>
            <Typography variant="h4" gutterBottom>
              State-of-the-Art Infrastructure
            </Typography>
            <Typography variant="body1" paragraph>
              Our academy boasts world-class facilities designed to international standards. We provide the perfect environment for athletes to train and excel in their chosen sports.
            </Typography>
            <Typography variant="body1" paragraph>
              Our facilities include:
            </Typography>
            <ul>
              <Typography component="li" variant="body1">Olympic-sized swimming pool</Typography>
              <Typography component="li" variant="body1">Indoor and outdoor tennis courts</Typography>
              <Typography component="li" variant="body1">Cricket ground with professional pitches</Typography>
              <Typography component="li" variant="body1">Badminton courts with international standard flooring</Typography>
              <Typography component="li" variant="body1">Modern gymnasium and fitness center</Typography>
              <Typography component="li" variant="body1">Sports medicine and rehabilitation center</Typography>
            </ul>
            <Box sx={{ mt: 2 }}>
              <Button variant="outlined" color="primary" href="/facilities">
                Explore Facilities
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* Call to Action Section */}
      <Box 
        sx={{ 
          bgcolor: theme.palette.primary.main, 
          color: 'white',
          py: 8,
          textAlign: 'center'
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" gutterBottom>
            Ready to Join Us?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4 }}>
            Take the first step towards sporting excellence today!
          </Typography>
          <Box>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              sx={{ mx: 1, mb: { xs: 2, sm: 0 } }}
              href="/register"
            >
              Register Now
            </Button>
            <Button 
              variant="outlined" 
              sx={{ 
                mx: 1, 
                color: 'white', 
                borderColor: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
              href="/contact"
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
