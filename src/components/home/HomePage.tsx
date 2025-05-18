import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Button, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent,
  useTheme,
  useMediaQuery,
  Paper,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';

// Import placeholder images for development
// These will be replaced with actual images in production
const badmintonImage = 'https://source.unsplash.com/random/800x600/?badminton';
const yogaImage = 'https://source.unsplash.com/random/800x600/?yoga';
const summerCampImage = 'https://source.unsplash.com/random/800x600/?summer-camp';
const logoImage = 'https://source.unsplash.com/random/800x600/?sports-logo';
const coachImage = 'https://source.unsplash.com/random/800x600/?coach';
const heroImage = 'https://source.unsplash.com/random/1600x900/?sports-academy';
const galleryImage1 = 'https://source.unsplash.com/random/800x600/?football';
const galleryImage2 = 'https://source.unsplash.com/random/800x600/?boxing';
const galleryImage3 = 'https://source.unsplash.com/random/800x600/?sports';
const galleryImage4 = 'https://source.unsplash.com/random/800x600/?training';
const galleryImage5 = 'https://source.unsplash.com/random/800x600/?fitness';
const galleryImage6 = 'https://source.unsplash.com/random/800x600/?athletics';

const programs = [
  {
    id: 1,
    title: "Badminton Training",
    description: "Professional badminton coaching with focus on fundamental techniques, footwork, and shot selection.",
    imageUrl: badmintonImage,
    time: "6:30 AM - 8:00 AM",
    icon: <SportsTennisIcon />
  },
  {
    id: 2,
    title: "Yoga Classes",
    description: "Daily yoga sessions to improve flexibility, strength, and mental focus for athletes of all levels.",
    imageUrl: yogaImage,
    time: "6:00 AM - 7:00 AM",
    icon: <SportsKabaddiIcon />
  },
  {
    id: 3,
    title: "Football Training",
    description: "Comprehensive football training program focusing on skills, strategy, and teamwork.",
    imageUrl: galleryImage1,
    time: "8:00 AM - 9:30 AM",
    icon: <SportsSoccerIcon />
  },
  {
    id: 4,
    title: "Boxing Classes",
    description: "Learn boxing techniques, conditioning, and strategic aspects under expert guidance.",
    imageUrl: galleryImage3,
    time: "6:30 AM - 8:00 AM",
    icon: <FitnessCenterIcon />
  }
];

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
  // Hero carousel settings
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: !isMobile,
  };

  // Program carousel settings
  const programSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: !isMobile,
  };

  // Gallery carousel settings
  const gallerySettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 2 : 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: !isMobile,
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box sx={{ position: 'relative', mb: 6 }}>
        <Slider {...heroSettings}>
          <Box>
            <Box 
              sx={{ 
                height: { xs: '70vh', md: '85vh' },
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Container maxWidth="lg">
                <Box sx={{ 
                  textAlign: 'left', 
                  color: 'white', 
                  p: { xs: 2, md: 4 },
                  maxWidth: { xs: '100%', md: '60%' }
                }}>
                  <Typography 
                    variant="h1" 
                    component="h1" 
                    gutterBottom
                    sx={{ 
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: theme.palette.secondary.main
                    }}
                  >
                    Vendhan Sports Academy
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 4,
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      fontWeight: 500
                    }}
                  >
                    Nurturing champions through expert coaching and world-class facilities in Oddanchatram
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      size="large"
                      sx={{ 
                        py: 1.5, 
                        px: 3, 
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}
                      href="/programs"
                    >
                      Explore Programs
                    </Button>
                    <Button 
                      variant="outlined" 
                      size="large"
                      sx={{ 
                        py: 1.5, 
                        px: 3, 
                        fontWeight: 'bold',
                        fontSize: '1rem',
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
                </Box>
              </Container>
            </Box>
          </Box>
          <Box>
            <Box 
              sx={{ 
                height: { xs: '70vh', md: '85vh' },
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${summerCampImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Container maxWidth="lg">
                <Box sx={{ 
                  textAlign: 'left', 
                  color: 'white', 
                  p: { xs: 2, md: 4 },
                  maxWidth: { xs: '100%', md: '60%' }
                }}>
                  <Typography 
                    variant="h1" 
                    component="h1" 
                    gutterBottom
                    sx={{ 
                      fontSize: { xs: '2.5rem', md: '4rem' },
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      color: theme.palette.secondary.main
                    }}
                  >
                    Summer Camp 2025
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 4,
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      fontWeight: 500
                    }}
                  >
                    Join our comprehensive summer program featuring sports, yoga, and cultural activities for children
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      size="large"
                      sx={{ 
                        py: 1.5, 
                        px: 3, 
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}
                      href="/summer-camp"
                    >
                      Register Now
                    </Button>
                    <Button 
                      variant="outlined" 
                      size="large"
                      sx={{ 
                        py: 1.5, 
                        px: 3, 
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        color: 'white',
                        borderColor: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          backgroundColor: 'rgba(255,255,255,0.1)'
                        }
                      }}
                      href="/schedule"
                    >
                      View Schedule
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        </Slider>
      </Box>

      {/* About Section */}
      <Container maxWidth="lg" sx={{ mb: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: theme.palette.secondary.main
              }
            }}
          >
            About Vendhan Sports Academy
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              mt: 4,
              fontSize: '1.1rem',
              lineHeight: 1.8
            }}
          >
            Established in Oddanchatram, Vendhan Sports Academy has been at the forefront of sports education and training. 
            Our mission is to discover, nurture, and develop sporting talent across various disciplines including Badminton, 
            Yoga, Football, Boxing, and more. Led by Dr. T. Ganesh Babu, our academy provides expert coaching with focus on 
            fundamental techniques, conditioning, and strategic mental aspects.
          </Typography>
        </Box>

        <Grid container spacing={4} alignItems="center">
          <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
            <Box sx={{ 
              p: 2, 
              borderRadius: 2,
              boxShadow: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, color: theme.palette.primary.main }}>
                Our Approach
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <FitnessCenterIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Fundamental Techniques" 
                    secondary="Grips, footwork, and shot selection tailored to each sport"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsBaseballIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Conditioning and Physical Training" 
                    secondary="Specialized programs to build strength, endurance, and agility"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <SportsKabaddiIcon color="secondary" />
                  </ListItemIcon>
                  <ListItemText 
                    primary="Strategic and Mental Aspects" 
                    secondary="Developing focus, game strategy, and competitive mindset"
                  />
                </ListItem>
              </List>
              <Box sx={{ mt: 2 }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  sx={{ fontWeight: 'bold' }}
                  href="/about"
                >
                  Learn More About Us
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
            <Box sx={{ 
              p: 2, 
              borderRadius: 2,
              overflow: 'hidden',
              height: '100%'
            }}>
              <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                p: 3,
                backgroundColor: theme.palette.grey[100],
                borderRadius: 2
              }}>
                <Avatar 
                  src={coachImage} 
                  alt="Dr. T. Ganesh Babu"
                  sx={{ 
                    width: 150, 
                    height: 150, 
                    mb: 2,
                    border: `4px solid ${theme.palette.secondary.main}`
                  }}
                />
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
                  Dr. T. Ganesh Babu
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  B.P.E., M.P.Ed., M.Phil., Ph.D., PG Dip Yoga, PG Dip (S.Psy), CNSNIS (Football)
                </Typography>
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  "Our coaching philosophy focuses on developing not just athletic skills, but also character, discipline, and sportsmanship."
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Programs Section */}
      <Box sx={{ 
        py: 8, 
        backgroundColor: theme.palette.grey[100],
        position: 'relative',
        '&:before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`
        }
      }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                position: 'relative',
                display: 'inline-block',
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-10px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80px',
                  height: '4px',
                  backgroundColor: theme.palette.secondary.main
                }
              }}
            >
              Our Programs
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '800px', 
                mx: 'auto', 
                mt: 4,
                fontSize: '1.1rem',
                mb: 4
              }}
            >
              Discover our diverse range of sports programs designed to develop skills, build confidence, and promote physical fitness for all ages and skill levels.
            </Typography>
          </Box>

          <Slider {...programSettings}>
            {programs.map((program) => (
              <Box key={program.id} sx={{ px: 2 }}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 2,
                    overflow: 'hidden',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 8
                    }
                  }}
                >
                  <CardMedia
                    component="img"
                    height="220"
                    image={program.imageUrl}
                    alt={program.title}
                    sx={{ objectFit: 'cover' }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Avatar sx={{ bgcolor: theme.palette.primary.main, mr: 2 }}>
                        {program.icon}
                      </Avatar>
                      <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 600 }}>
                        {program.title}
                      </Typography>
                    </Box>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {program.description}
                    </Typography>
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      mt: 2,
                      color: theme.palette.text.secondary
                    }}>
                      <AccessTimeIcon fontSize="small" sx={{ mr: 1 }} />
                      <Typography variant="body2">{program.time}</Typography>
                    </Box>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      sx={{ mt: 2, fontWeight: 'bold' }}
                      fullWidth
                      href={`/programs/${program.id}`}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </Slider>
          
          <Box sx={{ textAlign: 'center', mt: 4 }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large"
              sx={{ 
                py: 1.5, 
                px: 4, 
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
              href="/programs"
            >
              View All Programs
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            variant="h2" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontSize: { xs: '2rem', md: '3rem' },
              fontWeight: 700,
              position: 'relative',
              display: 'inline-block',
              '&:after': {
                content: '""',
                position: 'absolute',
                bottom: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '80px',
                height: '4px',
                backgroundColor: theme.palette.secondary.main
              }
            }}
          >
            Gallery
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              mt: 4,
              fontSize: '1.1rem',
              mb: 4
            }}
          >
            Explore moments from our training sessions, events, and achievements at Vendhan Sports Academy.
          </Typography>
        </Box>

        <Slider {...gallerySettings}>
          {[galleryImage1, galleryImage2, galleryImage3, galleryImage4, galleryImage5, galleryImage6].map((image, index) => (
            <Box key={index} sx={{ px: 1 }}>
              <Paper 
                elevation={3} 
                sx={{ 
                  borderRadius: 2, 
                  overflow: 'hidden',
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.05)'
                  }
                }}
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  style={{ 
                    width: '100%', 
                    height: '220px', 
                    objectFit: 'cover',
                    display: 'block'
                  }} 
                />
              </Paper>
            </Box>
          ))}
        </Slider>
        
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            sx={{ 
              py: 1.5, 
              px: 4, 
              fontWeight: 'bold',
              fontSize: '1rem'
            }}
            href="/gallery"
          >
            View Full Gallery
          </Button>
        </Box>
      </Container>

      {/* Contact/CTA Section */}
      <Box 
        sx={{ 
          py: 8,
          background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${yogaImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          position: 'relative'
        }}
      >
        <Container maxWidth="md">
          <Typography 
            variant="h3" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              fontSize: { xs: '1.8rem', md: '2.5rem' }
            }}
          >
            Ready to Join Vendhan Sports Academy?
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              mb: 4,
              maxWidth: '700px',
              mx: 'auto',
              opacity: 0.9,
              fontSize: { xs: '1rem', md: '1.25rem' }
            }}
          >
            Take the first step towards sporting excellence today! Contact us to learn more about our programs or to schedule a visit.
          </Typography>
          
          <Grid container spacing={4} justifyContent="center" sx={{ mb: 4 }}>
            <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 4' } }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                p: 2
              }}>
                <Avatar sx={{ bgcolor: theme.palette.secondary.main, mb: 2, width: 56, height: 56 }}>
                  <LocationOnIcon fontSize="large" />
                </Avatar>
                <Typography variant="h6" gutterBottom>Location</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Oddanchatram, Tamil Nadu
                </Typography>
              </Box>
            </Grid>
            <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 4' } }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                p: 2
              }}>
                <Avatar sx={{ bgcolor: theme.palette.secondary.main, mb: 2, width: 56, height: 56 }}>
                  <PhoneIcon fontSize="large" />
                </Avatar>
                <Typography variant="h6" gutterBottom>Contact</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  8608649937, 9566672112
                </Typography>
              </Box>
            </Grid>
            <Grid sx={{ gridColumn: { xs: 'span 12', sm: 'span 4' } }}>
              <Box sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center',
                p: 2
              }}>
                <Avatar sx={{ bgcolor: theme.palette.secondary.main, mb: 2, width: 56, height: 56 }}>
                  <AccessTimeIcon fontSize="large" />
                </Avatar>
                <Typography variant="h6" gutterBottom>Training Hours</Typography>
                <Typography variant="body2" sx={{ opacity: 0.8 }}>
                  Morning: 6:00 AM - 9:30 AM
                </Typography>
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3, flexWrap: 'wrap' }}>
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              sx={{ 
                py: 1.5, 
                px: 4, 
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
              href="/register"
            >
              Register Now
            </Button>
            <Button 
              variant="outlined" 
              sx={{ 
                py: 1.5, 
                px: 4, 
                fontWeight: 'bold',
                fontSize: '1rem',
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
