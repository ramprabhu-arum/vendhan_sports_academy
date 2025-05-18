import React, { useState, useEffect } from 'react';
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
  Avatar,
  Stack,
  IconButton,
  Divider,
  Chip,
  alpha,
  Fade,
  Slide,
  Zoom,
  TextField,
  MenuItem,
  InputAdornment
} from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EventIcon from '@mui/icons-material/Event';
import PaymentIcon from '@mui/icons-material/Payment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import { Link as RouterLink } from 'react-router-dom';

// Directly use Unsplash URLs for guaranteed image display
const images = {
  hero1: 'https://images.unsplash.com/photo-1526232373132-0e4ee643628a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  hero2: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  hero3: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  badminton: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  yoga: 'https://images.unsplash.com/photo-1599447292461-69e1a6704d63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  football: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  boxing: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  coach: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  booking: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  events: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
  gallery1: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  gallery2: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80',
  gallery3: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  gallery4: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  pattern: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
};

const programs = [
  {
    id: 1,
    title: "Badminton",
    description: "Professional coaching with focus on techniques, footwork, and competitive play.",
    imageUrl: images.badminton,
    icon: <SportsTennisIcon />,
    color: "#2196f3",
    features: ["Professional Coaching", "Tournament Preparation", "All Age Groups", "Individual & Group Sessions"]
  },
  {
    id: 2,
    title: "Yoga",
    description: "Daily sessions to improve flexibility, strength, and mental focus.",
    imageUrl: images.yoga,
    icon: <SportsKabaddiIcon />,
    color: "#4caf50",
    features: ["Certified Instructors", "Beginner to Advanced", "Meditation Sessions", "Stress Management"]
  },
  {
    id: 3,
    title: "Football",
    description: "Comprehensive training focusing on skills, strategy, and teamwork.",
    imageUrl: images.football,
    icon: <SportsSoccerIcon />,
    color: "#ff9800",
    features: ["Technical Training", "Tactical Development", "Physical Conditioning", "Team Building"]
  },
  {
    id: 4,
    title: "Boxing",
    description: "Learn techniques, conditioning, and strategic aspects under expert guidance.",
    imageUrl: images.boxing,
    icon: <FitnessCenterIcon />,
    color: "#e91e63",
    features: ["Professional Trainers", "Fitness & Conditioning", "Sparring Sessions", "Competition Preparation"]
  }
];

// Core system features
const systemFeatures = [
  {
    id: 1,
    title: "Member Portal",
    description: "Register, login, and manage your profile with our secure member portal.",
    icon: <PersonAddIcon />,
    path: "/register",
    color: "#3f51b5"
  },
  {
    id: 2,
    title: "Court Booking",
    description: "Reserve courts and facilities with our easy-to-use booking system.",
    icon: <CalendarMonthIcon />,
    path: "/booking",
    color: "#009688"
  },
  {
    id: 3,
    title: "Attendance",
    description: "Track your attendance with our QR code-based check-in system.",
    icon: <QrCodeIcon />,
    path: "/attendance",
    color: "#673ab7"
  },
  {
    id: 4,
    title: "Events",
    description: "Browse and register for upcoming tournaments and special events.",
    icon: <EventIcon />,
    path: "/events",
    color: "#ff5722"
  },
  {
    id: 5,
    title: "Payments",
    description: "View payment history and make secure online payments.",
    icon: <PaymentIcon />,
    path: "/payments",
    color: "#795548"
  },
  {
    id: 6,
    title: "Dashboard",
    description: "Access your personalized dashboard with all your activity.",
    icon: <DashboardIcon />,
    path: "/dashboard",
    color: "#607d8b"
  }
];

// Stats
const stats = [
  { value: "15+", label: "Years Experience", icon: <AccessTimeIcon /> },
  { value: "1000+", label: "Active Members", icon: <GroupsIcon /> },
  { value: "50+", label: "Expert Coaches", icon: <SchoolIcon /> },
  { value: "200+", label: "Tournaments Won", icon: <EmojiEventsIcon /> },
];

// Testimonials
const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Badminton Player",
    quote: "The coaching at Vendhan Sports Academy transformed my game completely. The personalized attention and technical focus helped me win my first state championship.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Parent",
    quote: "My children have been attending the football program for 2 years now. The coaches are excellent with kids and the facilities are world-class. Highly recommended!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5
  },
  {
    id: 3,
    name: "Arun Nair",
    role: "Yoga Enthusiast",
    quote: "The yoga classes have helped me improve not just physically but mentally as well. The instructors are knowledgeable and create a peaceful atmosphere.",
    avatar: "https://randomuser.me/api/portraits/men/62.jpg",
    rating: 4
  }
];

const HomePage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [activeSlide, setActiveSlide] = useState(0);
  const [animatedStats, setAnimatedStats] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const statsSection = document.getElementById('stats-section');
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
          setAnimatedStats(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Hero carousel settings
  const heroSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false,
    fade: true,
    beforeChange: (current, next) => setActiveSlide(next),
    customPaging: (i) => (
      <Box
        sx={{
          width: 12,
          height: 12,
          borderRadius: '50%',
          backgroundColor: i === activeSlide ? theme.palette.secondary.main : 'rgba(255,255,255,0.5)',
          transition: 'all 0.3s ease',
          cursor: 'pointer',
          mx: 0.5,
        }}
      />
    ),
    appendDots: dots => (
      <Box
        sx={{
          position: 'absolute',
          bottom: 30,
          width: '100%',
          textAlign: 'center',
          '& ul': {
            margin: 0,
            padding: 0,
          }
        }}
      >
        <ul style={{ margin: "0px" }}>{dots}</ul>
      </Box>
    ),
  };

  // Testimonial carousel settings
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isTablet ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <Box sx={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box sx={{ 
        position: 'relative', 
        height: { xs: '100vh', md: '100vh' },
        backgroundColor: '#000',
        color: '#fff'
      }}>
        <Slider {...heroSettings}>
          <Box>
            <Box 
              sx={{ 
                height: { xs: '100vh', md: '100vh' },
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${images.hero1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Container maxWidth="xl">
                <Box sx={{ 
                  textAlign: 'left', 
                  color: 'white', 
                  p: { xs: 2, md: 4 },
                  maxWidth: { xs: '100%', md: '60%' }
                }}>
                  <Fade in={activeSlide === 0} timeout={1000}>
                    <Box>
                      <Typography 
                        variant="overline" 
                        sx={{ 
                          fontSize: { xs: '0.9rem', md: '1.1rem' },
                          letterSpacing: '0.2em',
                          mb: 2,
                          display: 'block',
                          color: theme.palette.secondary.main
                        }}
                      >
                        WELCOME TO
                      </Typography>
                      <Typography 
                        variant="h1" 
                        component="h1" 
                        gutterBottom
                        sx={{ 
                          fontSize: { xs: '3rem', md: '5rem' },
                          fontWeight: 800,
                          lineHeight: 1.1,
                          mb: 3,
                          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        }}
                      >
                        VENDHAN SPORTS ACADEMY
                      </Typography>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 4,
                          fontSize: { xs: '1.1rem', md: '1.3rem' },
                          fontWeight: 400,
                          opacity: 0.9,
                          maxWidth: '80%',
                          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                        }}
                      >
                        Discover your potential with our expert coaching and state-of-the-art facilities
                      </Typography>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button 
                          variant="contained" 
                          color="secondary" 
                          size="large"
                          startIcon={<PersonAddIcon />}
                          sx={{ 
                            py: 1.5, 
                            px: 3, 
                            fontWeight: 700,
                            fontSize: '1rem',
                            borderRadius: '4px',
                            boxShadow: '0 4px 14px 0 rgba(248, 111, 3, 0.39)',
                          }}
                          component={RouterLink}
                          to="/register"
                        >
                          JOIN NOW
                        </Button>
                        <Button 
                          variant="outlined"
                          size="large"
                          startIcon={<PlayArrowIcon />}
                          sx={{ 
                            py: 1.5, 
                            px: 3, 
                            fontWeight: 700,
                            fontSize: '1rem',
                            color: 'white',
                            borderColor: 'white',
                            borderRadius: '4px',
                            borderWidth: 2,
                            '&:hover': {
                              borderWidth: 2,
                              borderColor: 'white',
                              backgroundColor: 'rgba(255,255,255,0.1)'
                            }
                          }}
                        >
                          WATCH VIDEO
                        </Button>
                      </Stack>
                    </Box>
                  </Fade>
                </Box>
              </Container>
            </Box>
          </Box>
          <Box>
            <Box 
              sx={{ 
                height: { xs: '100vh', md: '100vh' },
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${images.hero2})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Container maxWidth="xl">
                <Box sx={{ 
                  textAlign: 'left', 
                  color: 'white', 
                  p: { xs: 2, md: 4 },
                  maxWidth: { xs: '100%', md: '60%' }
                }}>
                  <Fade in={activeSlide === 1} timeout={1000}>
                    <Box>
                      <Typography 
                        variant="overline" 
                        sx={{ 
                          fontSize: { xs: '0.9rem', md: '1.1rem' },
                          letterSpacing: '0.2em',
                          mb: 2,
                          display: 'block',
                          color: theme.palette.secondary.main
                        }}
                      >
                        EXPERT COACHING
                      </Typography>
                      <Typography 
                        variant="h1" 
                        component="h1" 
                        gutterBottom
                        sx={{ 
                          fontSize: { xs: '3rem', md: '5rem' },
                          fontWeight: 800,
                          lineHeight: 1.1,
                          mb: 3,
                          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        }}
                      >
                        TRAIN WITH THE BEST
                      </Typography>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 4,
                          fontSize: { xs: '1.1rem', md: '1.3rem' },
                          fontWeight: 400,
                          opacity: 0.9,
                          maxWidth: '80%',
                          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                        }}
                      >
                        Our certified coaches bring decades of experience to help you achieve your sporting goals
                      </Typography>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button 
                          variant="contained" 
                          color="secondary" 
                          size="large"
                          startIcon={<CalendarMonthIcon />}
                          sx={{ 
                            py: 1.5, 
                            px: 3, 
                            fontWeight: 700,
                            fontSize: '1rem',
                            borderRadius: '4px',
                            boxShadow: '0 4px 14px 0 rgba(248, 111, 3, 0.39)',
                          }}
                          component={RouterLink}
                          to="/booking"
                        >
                          BOOK A SESSION
                        </Button>
                        <Button 
                          variant="outlined"
                          size="large"
                          startIcon={<ArrowForwardIcon />}
                          sx={{ 
                            py: 1.5, 
                            px: 3, 
                            fontWeight: 700,
                            fontSize: '1rem',
                            color: 'white',
                            borderColor: 'white',
                            borderRadius: '4px',
                            borderWidth: 2,
                            '&:hover': {
                              borderWidth: 2,
                              borderColor: 'white',
                              backgroundColor: 'rgba(255,255,255,0.1)'
                            }
                          }}
                          component={RouterLink}
                          to="/programs"
                        >
                          OUR PROGRAMS
                        </Button>
                      </Stack>
                    </Box>
                  </Fade>
                </Box>
              </Container>
            </Box>
          </Box>
          <Box>
            <Box 
              sx={{ 
                height: { xs: '100vh', md: '100vh' },
                position: 'relative',
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${images.hero3})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Container maxWidth="xl">
                <Box sx={{ 
                  textAlign: 'left', 
                  color: 'white', 
                  p: { xs: 2, md: 4 },
                  maxWidth: { xs: '100%', md: '60%' }
                }}>
                  <Fade in={activeSlide === 2} timeout={1000}>
                    <Box>
                      <Typography 
                        variant="overline" 
                        sx={{ 
                          fontSize: { xs: '0.9rem', md: '1.1rem' },
                          letterSpacing: '0.2em',
                          mb: 2,
                          display: 'block',
                          color: theme.palette.secondary.main
                        }}
                      >
                        UPCOMING EVENTS
                      </Typography>
                      <Typography 
                        variant="h1" 
                        component="h1" 
                        gutterBottom
                        sx={{ 
                          fontSize: { xs: '3rem', md: '5rem' },
                          fontWeight: 800,
                          lineHeight: 1.1,
                          mb: 3,
                          textShadow: '0 2px 10px rgba(0,0,0,0.3)',
                        }}
                      >
                        SUMMER SPORTS CAMP
                      </Typography>
                      <Typography 
                        variant="h5" 
                        sx={{ 
                          mb: 4,
                          fontSize: { xs: '1.1rem', md: '1.3rem' },
                          fontWeight: 400,
                          opacity: 0.9,
                          maxWidth: '80%',
                          textShadow: '0 1px 3px rgba(0,0,0,0.3)',
                        }}
                      >
                        Join our intensive summer training program for children aged 8-16. Limited spots available!
                      </Typography>
                      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                        <Button 
                          variant="contained" 
                          color="secondary" 
                          size="large"
                          startIcon={<EventIcon />}
                          sx={{ 
                            py: 1.5, 
                            px: 3, 
                            fontWeight: 700,
                            fontSize: '1rem',
                            borderRadius: '4px',
                            boxShadow: '0 4px 14px 0 rgba(248, 111, 3, 0.39)',
                          }}
                          component={RouterLink}
                          to="/events"
                        >
                          REGISTER NOW
                        </Button>
                        <Button 
                          variant="outlined"
                          size="large"
                          startIcon={<ArrowForwardIcon />}
                          sx={{ 
                            py: 1.5, 
                            px: 3, 
                            fontWeight: 700,
                            fontSize: '1rem',
                            color: 'white',
                            borderColor: 'white',
                            borderRadius: '4px',
                            borderWidth: 2,
                            '&:hover': {
                              borderWidth: 2,
                              borderColor: 'white',
                              backgroundColor: 'rgba(255,255,255,0.1)'
                            }
                          }}
                          component={RouterLink}
                          to="/events"
                        >
                          VIEW DETAILS
                        </Button>
                      </Stack>
                    </Box>
                  </Fade>
                </Box>
              </Container>
            </Box>
          </Box>
        </Slider>
        
        {/* Scroll indicator */}
        <Box sx={{ 
          position: 'absolute', 
          bottom: 40, 
          left: '50%', 
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          animation: 'bounce 2s infinite',
          zIndex: 2,
        }}>
          <Typography variant="overline" sx={{ mb: 1, opacity: 0.7, letterSpacing: 3 }}>
            SCROLL
          </Typography>
          <Box sx={{ 
            width: 30, 
            height: 50, 
            border: '2px solid white', 
            borderRadius: 15,
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 8,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 6,
              height: 6,
              backgroundColor: 'white',
              borderRadius: '50%',
              animation: 'scrollDown 2s infinite'
            }
          }} />
        </Box>
        
        {/* Custom CSS for animations */}
        <style jsx="true">{`
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {
              transform: translateY(0) translateX(-50%);
            }
            40% {
              transform: translateY(-10px) translateX(-50%);
            }
            60% {
              transform: translateY(-5px) translateX(-50%);
            }
          }
          
          @keyframes scrollDown {
            0% {
              opacity: 1;
              transform: translateY(0) translateX(-50%);
            }
            100% {
              opacity: 0;
              transform: translateY(20px) translateX(-50%);
            }
          }
          
          @keyframes countUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </Box>

      {/* Stats Section */}
      <Box 
        id="stats-section"
        sx={{ 
          py: { xs: 6, md: 8 }, 
          backgroundColor: theme.palette.primary.main,
          color: 'white',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${images.pattern})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth="xl">
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Zoom in={animatedStats} style={{ transitionDelay: `${index * 150}ms` }}>
                  <Box sx={{ 
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                    p: 3,
                  }}>
                    <Box sx={{ 
                      display: 'flex',
                      justifyContent: 'center',
                      mb: 2,
                      color: theme.palette.secondary.main,
                      fontSize: '2.5rem'
                    }}>
                      {stat.icon}
                    </Box>
                    <Typography 
                      variant="h2" 
                      sx={{ 
                        fontWeight: 800,
                        mb: 1,
                        fontSize: { xs: '2.5rem', md: '3.5rem' },
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        opacity: 0.8,
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                </Zoom>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programs Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            textAlign: 'center', 
            mb: { xs: 6, md: 8 },
            position: 'relative',
            zIndex: 2
          }}>
            <Typography 
              variant="overline" 
              sx={{ 
                fontSize: '1rem',
                letterSpacing: '0.2em',
                mb: 1,
                display: 'block',
                color: theme.palette.primary.main
              }}
            >
              WHAT WE OFFER
            </Typography>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 2
              }}
            >
              OUR PROGRAMS
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '700px', 
                mx: 'auto', 
                mb: 6,
                fontSize: '1.1rem',
                color: 'text.secondary'
              }}
            >
              Discover our diverse range of sports programs designed to develop skills, build confidence, and promote physical fitness.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {programs.map((program) => (
              <Grid item xs={12} sm={6} md={3} key={program.id}>
                <Card 
                  sx={{ 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    borderRadius: 2,
                    overflow: 'hidden',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                      '& .MuiCardMedia-root': {
                        transform: 'scale(1.05)'
                      }
                    }
                  }}
                >
                  <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                    <CardMedia
                      component="img"
                      height="240"
                      image={program.imageUrl}
                      alt={program.title}
                      sx={{ 
                        transition: 'transform 0.5s ease',
                      }}
                    />
                    <Box sx={{ 
                      position: 'absolute',
                      top: 16,
                      left: 16,
                      backgroundColor: program.color,
                      color: 'white',
                      width: 50,
                      height: 50,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                      zIndex: 1,
                    }}>
                      {program.icon}
                    </Box>
                  </Box>
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Typography 
                      gutterBottom 
                      variant="h5" 
                      component="h3" 
                      sx={{ 
                        fontWeight: 700,
                        color: program.color,
                      }}
                    >
                      {program.title}
                    </Typography>
                    <Typography 
                      variant="body2" 
                      color="text.secondary" 
                      sx={{ mb: 3 }}
                    >
                      {program.description}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Box>
                      {program.features.map((feature, index) => (
                        <Stack direction="row" spacing={1} alignItems="center" key={index} sx={{ mb: 1 }}>
                          <CheckCircleIcon sx={{ color: program.color, fontSize: '1rem' }} />
                          <Typography variant="body2" color="text.secondary">
                            {feature}
                          </Typography>
                        </Stack>
                      ))}
                    </Box>
                  </CardContent>
                  <Box sx={{ p: 3, pt: 0 }}>
                    <Button 
                      variant="contained" 
                      fullWidth
                      sx={{ 
                        py: 1.2,
                        backgroundColor: program.color,
                        '&:hover': {
                          backgroundColor: alpha(program.color, 0.8),
                        }
                      }}
                      endIcon={<ArrowForwardIcon />}
                      component={RouterLink}
                      to="/programs"
                    >
                      Learn More
                    </Button>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        backgroundColor: '#f8f9fa',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          backgroundImage: `linear-gradient(to right, rgba(248,249,250,1), rgba(248,249,250,0.5)), url(${images.booking})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center left',
          opacity: 0.2,
          zIndex: 0,
          display: { xs: 'none', lg: 'block' }
        }
      }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            textAlign: 'center', 
            mb: { xs: 6, md: 8 },
            position: 'relative',
            zIndex: 2
          }}>
            <Typography 
              variant="overline" 
              sx={{ 
                fontSize: '1rem',
                letterSpacing: '0.2em',
                mb: 1,
                display: 'block',
                color: theme.palette.primary.main
              }}
            >
              MANAGEMENT SYSTEM
            </Typography>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 2
              }}
            >
              KEY FEATURES
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '700px', 
                mx: 'auto', 
                mb: 6,
                fontSize: '1.1rem',
                color: 'text.secondary'
              }}
            >
              Our comprehensive sports management system streamlines member registration, court bookings, attendance tracking, and more.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {systemFeatures.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={feature.id}>
                <Slide direction={index % 2 === 0 ? "right" : "left"} in={true} mountOnEnter unmountOnExit timeout={(index + 1) * 200}>
                  <Paper 
                    sx={{ 
                      p: 0, 
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      overflow: 'hidden',
                      borderRadius: 2,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      zIndex: 1,
                      '&:hover': {
                        transform: 'translateY(-10px)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
                        '&::before': {
                          opacity: 1,
                        }
                      },
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: `linear-gradient(135deg, ${alpha(feature.color, 0.05)} 0%, rgba(255,255,255,0) 60%)`,
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        zIndex: -1,
                      }
                    }}
                  >
                    <Box sx={{ 
                      p: 4, 
                      display: 'flex', 
                      alignItems: 'center',
                      borderBottom: '1px solid',
                      borderColor: 'divider'
                    }}>
                      <Avatar 
                        sx={{ 
                          mr: 3,
                          bgcolor: feature.color,
                          width: 60,
                          height: 60,
                          boxShadow: `0 8px 20px ${alpha(feature.color, 0.3)}`,
                        }}
                      >
                        {feature.icon}
                      </Avatar>
                      <Typography variant="h5" component="h3" sx={{ fontWeight: 700 }}>
                        {feature.title}
                      </Typography>
                    </Box>
                    <Box sx={{ p: 4, flexGrow: 1 }}>
                      <Typography variant="body1" paragraph sx={{ color: 'text.secondary' }}>
                        {feature.description}
                      </Typography>
                      <Button 
                        variant="outlined" 
                        color="primary" 
                        fullWidth
                        endIcon={<ArrowForwardIcon />}
                        sx={{ 
                          mt: 2, 
                          fontWeight: 600,
                          py: 1.2,
                          borderRadius: 1,
                          borderColor: feature.color,
                          color: feature.color,
                          '&:hover': {
                            borderColor: feature.color,
                            backgroundColor: alpha(feature.color, 0.05),
                          }
                        }}
                        component={RouterLink}
                        to={feature.path}
                      >
                        ACCESS
                      </Button>
                    </Box>
                  </Paper>
                </Slide>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* About Section with Coach */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        backgroundColor: '#fff',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box sx={{ position: 'relative' }}>
                <Box 
                  component="img"
                  src={images.coach}
                  alt="Dr. T. Ganesh Babu"
                  sx={{ 
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    borderRadius: 2,
                    boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
                  }}
                />
                <Box sx={{ 
                  position: 'absolute',
                  bottom: -30,
                  right: -30,
                  width: 180,
                  height: 180,
                  backgroundColor: theme.palette.secondary.main,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  color: 'white',
                  p: 3,
                  textAlign: 'center',
                  borderRadius: 2,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                }}>
                  <Typography variant="h4" sx={{ fontWeight: 800 }}>15+</Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>YEARS OF EXPERIENCE</Typography>
                </Box>
                <IconButton 
                  sx={{ 
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    width: 80,
                    height: 80,
                    '&:hover': {
                      backgroundColor: 'white',
                      boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                    }
                  }}
                >
                  <PlayArrowIcon sx={{ fontSize: 40, color: theme.palette.primary.main }} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <Typography 
                  variant="overline" 
                  sx={{ 
                    fontSize: '1rem',
                    letterSpacing: '0.2em',
                    mb: 1,
                    display: 'block',
                    color: theme.palette.primary.main
                  }}
                >
                  ABOUT US
                </Typography>
                <Typography 
                  variant="h2" 
                  component="h2" 
                  gutterBottom
                  sx={{ 
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    fontWeight: 800,
                    mb: 3
                  }}
                >
                  DR. T. GANESH BABU
                </Typography>
                <Typography variant="h6" sx={{ color: theme.palette.text.secondary, mb: 2 }}>
                  Director & Head Coach
                </Typography>
                <Typography variant="body2" sx={{ color: theme.palette.text.secondary, mb: 4 }}>
                  B.P.E., M.P.Ed., M.Phil., Ph.D., PG Dip Yoga, PG Dip (S.Psy), CNSNIS (Football)
                </Typography>
                <Typography 
                  variant="body1" 
                  sx={{ 
                    mb: 3,
                    fontSize: '1.1rem',
                    lineHeight: 1.8,
                    color: theme.palette.text.secondary,
                  }}
                >
                  Established in Oddanchatram, Vendhan Sports Academy has been at the forefront of sports education and training. 
                  Our mission is to discover, nurture, and develop sporting talent across various disciplines including Badminton, 
                  Yoga, Football, Boxing, and more.
                </Typography>
                <Box sx={{ 
                  p: 3, 
                  mb: 4, 
                  borderLeft: `4px solid ${theme.palette.secondary.main}`,
                  backgroundColor: alpha(theme.palette.secondary.main, 0.05),
                  borderRadius: '0 4px 4px 0',
                }}>
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      fontSize: '1.1rem',
                      lineHeight: 1.8,
                      fontStyle: 'italic',
                      color: theme.palette.text.primary,
                    }}
                  >
                    "Our coaching philosophy focuses on developing not just athletic skills, but also character, discipline, and sportsmanship."
                  </Typography>
                </Box>
                <Button 
                  variant="outlined" 
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    py: 1.5, 
                    px: 4, 
                    fontWeight: 700,
                    fontSize: '1rem',
                    borderRadius: 1,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      transform: 'translateY(-3px)',
                      boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                    }
                  }}
                  component={RouterLink}
                  to="/about"
                >
                  LEARN MORE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        backgroundColor: alpha(theme.palette.primary.main, 0.03),
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            textAlign: 'center', 
            mb: { xs: 6, md: 8 },
            position: 'relative',
            zIndex: 2
          }}>
            <Typography 
              variant="overline" 
              sx={{ 
                fontSize: '1rem',
                letterSpacing: '0.2em',
                mb: 1,
                display: 'block',
                color: theme.palette.primary.main
              }}
            >
              TESTIMONIALS
            </Typography>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 2
              }}
            >
              WHAT OUR MEMBERS SAY
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '700px', 
                mx: 'auto', 
                mb: 6,
                fontSize: '1.1rem',
                color: 'text.secondary'
              }}
            >
              Hear from our members about their experiences and achievements at Vendhan Sports Academy.
            </Typography>
          </Box>

          <Box sx={{ px: { xs: 0, md: 4 } }}>
            <Slider {...testimonialSettings}>
              {testimonials.map((testimonial) => (
                <Box key={testimonial.id} sx={{ px: 2 }}>
                  <Paper
                    sx={{
                      p: 4,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '6px',
                        background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      }
                    }}
                  >
                    <Box sx={{ display: 'flex', mb: 3 }}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <StarIcon key={i} sx={{ color: theme.palette.secondary.main, mr: 0.5 }} />
                      ))}
                    </Box>
                    <Typography
                      variant="body1"
                      sx={{
                        mb: 4,
                        fontSize: '1.1rem',
                        lineHeight: 1.8,
                        fontStyle: 'italic',
                        flexGrow: 1,
                      }}
                    >
                      "{testimonial.quote}"
                    </Typography>
                    <Divider sx={{ mb: 3 }} />
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Avatar
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        sx={{ width: 60, height: 60 }}
                      />
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 700 }}>
                          {testimonial.name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {testimonial.role}
                        </Typography>
                      </Box>
                    </Stack>
                  </Paper>
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>

      {/* Gallery Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        backgroundColor: theme.palette.primary.main,
        color: 'white',
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
      }}>
        <Container maxWidth="xl">
          <Box sx={{ 
            textAlign: 'center', 
            mb: { xs: 6, md: 8 },
            position: 'relative',
            zIndex: 2
          }}>
            <Typography 
              variant="overline" 
              sx={{ 
                fontSize: '1rem',
                letterSpacing: '0.2em',
                mb: 1,
                display: 'block',
                color: theme.palette.secondary.main
              }}
            >
              OUR GALLERY
            </Typography>
            <Typography 
              variant="h2" 
              component="h2" 
              gutterBottom
              sx={{ 
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 800,
                mb: 2,
                color: 'white'
              }}
            >
              MOMENTS & ACHIEVEMENTS
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '700px', 
                mx: 'auto', 
                mb: 6,
                fontSize: '1.1rem',
                color: 'rgba(255,255,255,0.7)'
              }}
            >
              Explore moments from our training sessions, events, and achievements at Vendhan Sports Academy.
            </Typography>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                position: 'relative',
                overflow: 'hidden',
                height: 300,
                borderRadius: 2,
                '&:hover img': {
                  transform: 'scale(1.1)'
                }
              }}>
                <Box 
                  component="img"
                  src={images.gallery1}
                  alt="Gallery image 1"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <Box sx={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.1)'
                  }
                }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                position: 'relative',
                overflow: 'hidden',
                height: 300,
                borderRadius: 2,
                '&:hover img': {
                  transform: 'scale(1.1)'
                }
              }}>
                <Box 
                  component="img"
                  src={images.gallery2}
                  alt="Gallery image 2"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <Box sx={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.1)'
                  }
                }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                position: 'relative',
                overflow: 'hidden',
                height: 300,
                borderRadius: 2,
                '&:hover img': {
                  transform: 'scale(1.1)'
                }
              }}>
                <Box 
                  component="img"
                  src={images.gallery3}
                  alt="Gallery image 3"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <Box sx={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.1)'
                  }
                }} />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ 
                position: 'relative',
                overflow: 'hidden',
                height: 300,
                borderRadius: 2,
                '&:hover img': {
                  transform: 'scale(1.1)'
                }
              }}>
                <Box 
                  component="img"
                  src={images.gallery4}
                  alt="Gallery image 4"
                  sx={{ 
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />
                <Box sx={{ 
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  transition: 'background-color 0.3s ease',
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.1)'
                  }
                }} />
              </Box>
            </Grid>
          </Grid>
          
          <Box sx={{ textAlign: 'center', mt: 6, position: 'relative', zIndex: 1 }}>
            <Button 
              variant="outlined" 
              color="secondary" 
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ 
                py: 1.5, 
                px: 4, 
                fontWeight: 700,
                fontSize: '1rem',
                borderRadius: 1,
                color: 'white',
                borderColor: 'white',
                borderWidth: 2,
                '&:hover': {
                  borderWidth: 2,
                  borderColor: theme.palette.secondary.main,
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
              component={RouterLink}
              to="/gallery"
            >
              VIEW FULL GALLERY
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Contact/CTA Section */}
      <Box sx={{ 
        py: { xs: 8, md: 12 }, 
        backgroundColor: theme.palette.secondary.main,
        color: 'white',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundImage: `linear-gradient(rgba(248, 111, 3, 0.9), rgba(248, 111, 3, 0.9)), url(${images.pattern})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.8,
          zIndex: 0,
        }
      }}>
        <Container maxWidth="xl">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography 
                  variant="h2" 
                  gutterBottom
                  sx={{ 
                    fontWeight: 800,
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    lineHeight: 1.2
                  }}
                >
                  READY TO JOIN VENDHAN SPORTS ACADEMY?
                </Typography>
                <Typography 
                  variant="h5" 
                  sx={{ 
                    mb: 4,
                    fontWeight: 400,
                    opacity: 0.9
                  }}
                >
                  Take the first step towards sporting excellence today! Contact us to learn more about our programs or to schedule a visit.
                </Typography>
                <Grid container spacing={4}>
                  <Grid item xs={12} sm={4}>
                    <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
                      <IconButton 
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.2)',
                          width: 60,
                          height: 60,
                          mb: 1,
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.3)',
                          }
                        }}
                      >
                        <LocationOnIcon fontSize="large" />
                      </IconButton>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Location
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Oddanchatram, Tamil Nadu
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
                      <IconButton 
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.2)',
                          width: 60,
                          height: 60,
                          mb: 1,
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.3)',
                          }
                        }}
                      >
                        <PhoneIcon fontSize="large" />
                      </IconButton>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Contact
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        8608649937, 9566672112
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Stack spacing={2} alignItems="center" sx={{ textAlign: 'center' }}>
                      <IconButton 
                        sx={{ 
                          bgcolor: 'rgba(255,255,255,0.2)',
                          width: 60,
                          height: 60,
                          mb: 1,
                          '&:hover': {
                            bgcolor: 'rgba(255,255,255,0.3)',
                          }
                        }}
                      >
                        <AccessTimeIcon fontSize="large" />
                      </IconButton>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        Training Hours
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.9 }}>
                        Morning: 6:00 AM - 9:30 AM
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={5}>
              <Paper 
                sx={{ 
                  p: 4, 
                  borderRadius: 2,
                  boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: theme.palette.primary.main, mb: 3 }}>
                  Register Now
                </Typography>
                <Stack spacing={3}>
                  <TextField 
                    fullWidth 
                    label="Full Name" 
                    variant="outlined" 
                    sx={{ 
                      bgcolor: 'white',
                      borderRadius: 1,
                    }}
                  />
                  <TextField 
                    fullWidth 
                    label="Email Address" 
                    variant="outlined" 
                    sx={{ 
                      bgcolor: 'white',
                      borderRadius: 1,
                    }}
                  />
                  <TextField 
                    fullWidth 
                    label="Phone Number" 
                    variant="outlined" 
                    sx={{ 
                      bgcolor: 'white',
                      borderRadius: 1,
                    }}
                  />
                  <TextField 
                    fullWidth 
                    label="Program of Interest" 
                    variant="outlined" 
                    select
                    defaultValue=""
                    sx={{ 
                      bgcolor: 'white',
                      borderRadius: 1,
                    }}
                  >
                    <MenuItem value="">Select a program</MenuItem>
                    <MenuItem value="badminton">Badminton</MenuItem>
                    <MenuItem value="yoga">Yoga</MenuItem>
                    <MenuItem value="football">Football</MenuItem>
                    <MenuItem value="boxing">Boxing</MenuItem>
                  </TextField>
                  <Button 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    sx={{ 
                      py: 1.5,
                      fontWeight: 700,
                      fontSize: '1rem',
                      boxShadow: `0 8px 20px ${alpha(theme.palette.primary.main, 0.4)}`,
                    }}
                  >
                    SUBMIT REGISTRATION
                  </Button>
                </Stack>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
