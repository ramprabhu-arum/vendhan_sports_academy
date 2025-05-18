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
  Avatar,
  Divider,
  Stack,
  IconButton
} from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import SportsTennisIcon from '@mui/icons-material/SportsTennis';
import SportsKabaddiIcon from '@mui/icons-material/SportsKabaddi';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import QrCodeIcon from '@mui/icons-material/QrCode';
import EventIcon from '@mui/icons-material/Event';
import PaymentIcon from '@mui/icons-material/Payment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BarChartIcon from '@mui/icons-material/BarChart';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';

// Directly use Unsplash URLs for guaranteed image display
const images = {
  badminton: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  yoga: 'https://images.unsplash.com/photo-1599447292461-69e1a6704d63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  summerCamp: 'https://images.unsplash.com/photo-1526976668912-1a811878dd37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  coach: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  hero: 'https://images.unsplash.com/photo-1526232373132-0e4ee643628a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  gallery1: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  gallery2: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  gallery3: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  gallery4: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2036&q=80',
  gallery5: 'https://images.unsplash.com/photo-1599058917212-d750089bc07e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  gallery6: 'https://images.unsplash.com/photo-1502904550040-7534597429ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
  booking: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  attendance: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
  events: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
  admin: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
};

const programs = [
  {
    id: 1,
    title: "Badminton Training",
    description: "Professional badminton coaching with focus on fundamental techniques, footwork, and shot selection.",
    imageUrl: images.badminton,
    time: "6:30 AM - 8:00 AM",
    icon: <SportsTennisIcon />
  },
  {
    id: 2,
    title: "Yoga Classes",
    description: "Daily yoga sessions to improve flexibility, strength, and mental focus for athletes of all levels.",
    imageUrl: images.yoga,
    time: "6:00 AM - 7:00 AM",
    icon: <SportsKabaddiIcon />
  },
  {
    id: 3,
    title: "Football Training",
    description: "Comprehensive football training program focusing on skills, strategy, and teamwork.",
    imageUrl: images.gallery1,
    time: "8:00 AM - 9:30 AM",
    icon: <SportsSoccerIcon />
  },
  {
    id: 4,
    title: "Boxing Classes",
    description: "Learn boxing techniques, conditioning, and strategic aspects under expert guidance.",
    imageUrl: images.gallery3,
    time: "6:30 AM - 8:00 AM",
    icon: <FitnessCenterIcon />
  }
];

// Core system features
const systemFeatures = [
  {
    id: 1,
    title: "Member Registration",
    description: "Register as a new member with email verification and create your personalized profile.",
    icon: <PersonAddIcon fontSize="large" />,
    color: "#2196f3",
    path: "/register"
  },
  {
    id: 2,
    title: "Court Booking",
    description: "Book courts and facilities with our easy-to-use calendar-based reservation system.",
    icon: <CalendarMonthIcon fontSize="large" />,
    color: "#4caf50",
    path: "/booking"
  },
  {
    id: 3,
    title: "Attendance Tracking",
    description: "Check in and track your attendance with our QR code-based attendance system.",
    icon: <QrCodeIcon fontSize="large" />,
    color: "#ff9800",
    path: "/attendance"
  },
  {
    id: 4,
    title: "Event Registration",
    description: "Browse and register for upcoming tournaments, workshops, and special events.",
    icon: <EventIcon fontSize="large" />,
    color: "#e91e63",
    path: "/events"
  },
  {
    id: 5,
    title: "Fee Management",
    description: "View payment history, outstanding dues, and make secure online payments.",
    icon: <PaymentIcon fontSize="large" />,
    color: "#9c27b0",
    path: "/payments"
  },
  {
    id: 6,
    title: "Member Dashboard",
    description: "Access your personalized dashboard with attendance, bookings, and event participation.",
    icon: <DashboardIcon fontSize="large" />,
    color: "#3f51b5",
    path: "/dashboard"
  }
];

// Admin features
const adminFeatures = [
  {
    id: 1,
    title: "Admin Portal",
    description: "Comprehensive management tools for members, facilities, events, and content.",
    icon: <AdminPanelSettingsIcon fontSize="large" />,
    color: "#607d8b"
  },
  {
    id: 2,
    title: "Notifications",
    description: "Send targeted communications and alerts to members via email and in-app notifications.",
    icon: <NotificationsActiveIcon fontSize="large" />,
    color: "#ff5722"
  },
  {
    id: 3,
    title: "Reports & Analytics",
    description: "Generate detailed reports on attendance, facility usage, payments, and member activity.",
    icon: <BarChartIcon fontSize="large" />,
    color: "#795548"
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
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images.hero})`,
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
                    Complete sports management system for members, coaches, and administrators
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      size="large"
                      startIcon={<PersonAddIcon />}
                      sx={{ 
                        py: 1.5, 
                        px: 3, 
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}
                      href="/register"
                    >
                      Register Now
                    </Button>
                    <Button 
                      variant="contained"
                      color="primary"
                      size="large"
                      startIcon={<LoginIcon />}
                      sx={{ 
                        py: 1.5, 
                        px: 3, 
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}
                      href="/login"
                    >
                      Member Login
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
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images.booking})`,
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
                    Court Booking System
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 4,
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      fontWeight: 500
                    }}
                  >
                    Reserve courts and facilities with our easy-to-use online booking system
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      size="large"
                      startIcon={<CalendarMonthIcon />}
                      sx={{ 
                        py: 1.5, 
                        px: 3, 
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}
                      href="/booking"
                    >
                      Book Now
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
                      href="/facilities"
                    >
                      View Facilities
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
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${images.events})`,
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
                    Events & Tournaments
                  </Typography>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 4,
                      fontSize: { xs: '1.2rem', md: '1.5rem' },
                      fontWeight: 500
                    }}
                  >
                    Register for upcoming tournaments, workshops, and special events
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    <Button 
                      variant="contained" 
                      color="secondary" 
                      size="large"
                      startIcon={<EventIcon />}
                      sx={{ 
                        py: 1.5, 
                        px: 3, 
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}
                      href="/events"
                    >
                      View Events
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
                      href="/calendar"
                    >
                      Event Calendar
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Box>
          </Box>
        </Slider>
      </Box>

      {/* System Features Section */}
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
            Sports Management System
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
            Our comprehensive sports management system streamlines member registration, court bookings, 
            attendance tracking, event management, and fee payments. Access all features through our 
            user-friendly web portal.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {systemFeatures.map((feature) => (
            <Grid key={feature.id} sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }}>
              <Card 
                sx={{ 
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: 6
                  }
                }}
              >
                <Box 
                  sx={{ 
                    p: 3, 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center',
                    backgroundColor: feature.color,
                    color: 'white'
                  }}
                >
                  <Avatar 
                    sx={{ 
                      bgcolor: 'white', 
                      color: feature.color,
                      width: 70,
                      height: 70,
                      mb: 2
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h5" component="h3" align="center" sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {feature.description}
                  </Typography>
                  <Button 
                    variant="outlined" 
                    color="primary" 
                    fullWidth
                    sx={{ mt: 2, fontWeight: 'bold' }}
                    href={feature.path}
                  >
                    Access Feature
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Admin Features Section */}
      <Box sx={{ 
        py: 8, 
        backgroundColor: theme.palette.grey[900],
        color: 'white',
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
              Admin & Management Tools
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                maxWidth: '800px', 
                mx: 'auto', 
                mt: 4,
                fontSize: '1.1rem',
                opacity: 0.9
              }}
            >
              Powerful administrative tools for coaches and staff to manage members, track attendance, 
              organize events, and analyze performance metrics.
            </Typography>
          </Box>

          <Grid container spacing={4} justifyContent="center">
            {adminFeatures.map((feature) => (
              <Grid key={feature.id} sx={{ gridColumn: { xs: 'span 12', sm: 'span 6', md: 'span 4' } }}>
                <Paper 
                  sx={{ 
                    p: 4, 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    backdropFilter: 'blur(10px)',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                    }
                  }}
                >
                  <Avatar 
                    sx={{ 
                      bgcolor: feature.color, 
                      width: 80,
                      height: 80,
                      mb: 2
                    }}
                  >
                    {feature.icon}
                  </Avatar>
                  <Typography variant="h5" component="h3" gutterBottom sx={{ fontWeight: 600 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body1" sx={{ mb: 3, opacity: 0.8 }}>
                    {feature.description}
                  </Typography>
                  <Button 
                    variant="contained" 
                    color="secondary"
                    sx={{ mt: 'auto', fontWeight: 'bold' }}
                    href="/admin"
                  >
                    Admin Login
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Programs Section */}
      <Box sx={{ 
        py: 8, 
        backgroundColor: theme.palette.grey[100],
        position: 'relative'
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

      {/* About Section with Coach */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Grid container spacing={4} alignItems="center">
          <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
            <Box sx={{ p: { xs: 2, md: 4 } }}>
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
                    left: 0,
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
                  mt: 4,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3
                }}
              >
                Established in Oddanchatram, Vendhan Sports Academy has been at the forefront of sports education and training. 
                Our mission is to discover, nurture, and develop sporting talent across various disciplines including Badminton, 
                Yoga, Football, Boxing, and more.
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  mb: 3
                }}
              >
                Led by Dr. T. Ganesh Babu, our academy provides expert coaching with focus on fundamental techniques, 
                conditioning, and strategic mental aspects. Our state-of-the-art facilities and comprehensive management 
                system ensure the best experience for our members.
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                size="large"
                sx={{ 
                  mt: 2,
                  py: 1.5, 
                  px: 3, 
                  fontWeight: 'bold',
                  fontSize: '1rem'
                }}
                href="/about"
              >
                Learn More About Us
              </Button>
            </Box>
          </Grid>
          <Grid sx={{ gridColumn: { xs: 'span 12', md: 'span 6' } }}>
            <Box sx={{ 
              p: 4, 
              borderRadius: 2,
              boxShadow: 3,
              backgroundColor: theme.palette.background.paper,
            }}>
              <Box sx={{ 
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center'
              }}>
                <Avatar 
                  src={images.coach} 
                  alt="Dr. T. Ganesh Babu"
                  sx={{ 
                    width: 180, 
                    height: 180, 
                    mb: 3,
                    border: `4px solid ${theme.palette.secondary.main}`
                  }}
                />
                <Typography variant="h4" gutterBottom sx={{ fontWeight: 600 }}>
                  Dr. T. Ganesh Babu
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                  Director & Head Coach
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                  B.P.E., M.P.Ed., M.Phil., Ph.D., PG Dip Yoga, PG Dip (S.Psy), CNSNIS (Football)
                </Typography>
                <Divider sx={{ width: '100%', mb: 3 }} />
                <Typography variant="body1" sx={{ fontStyle: 'italic' }}>
                  "Our coaching philosophy focuses on developing not just athletic skills, but also character, discipline, and sportsmanship."
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>

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
          {[
            { src: images.gallery1, alt: "Football training" },
            { src: images.gallery2, alt: "Boxing class" },
            { src: images.gallery3, alt: "Sports activities" },
            { src: images.gallery4, alt: "Training session" },
            { src: images.gallery5, alt: "Fitness program" },
            { src: images.gallery6, alt: "Athletics training" }
          ].map((image, index) => (
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
                  src={image.src} 
                  alt={image.alt} 
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
          background: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${images.yoga})`,
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
          
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
            <Button 
              variant="contained" 
              color="secondary" 
              size="large" 
              startIcon={<PersonAddIcon />}
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
            <Button 
              variant="contained"
              color="primary"
              size="large"
              startIcon={<LoginIcon />}
              sx={{ 
                py: 1.5, 
                px: 4, 
                fontWeight: 'bold',
                fontSize: '1rem'
              }}
              href="/login"
            >
              Member Login
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
