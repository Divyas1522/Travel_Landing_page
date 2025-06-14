import React from 'react';
import DestinationList from './DestinationList';
import TopPackages from './TopPackages';
import AdvantagesSection from './AdvantagesSection';
import {
    Box,
    Container,
    Typography,
    Grid,
    Paper,
} from '@mui/material';
import TestimonialsSection from './TestimonialsSection';

const TravelHomePage = () => {
    return (
        <Box>
            {/* Hero Section */}
            <Box
                sx={{
                    backgroundImage: 'url(/best-holiday-destinations.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    minHeight: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    px: 2,
                }}
            >
                <Container maxWidth="md" >
                    <Typography
                        variant="h3"
                        fontWeight={700}
                        gutterBottom
                        sx={{
                            backgroundImage: 'linear-gradient(to right, #0072ff, #00c6ff)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            color: 'transparent',
                        }}
                    >
                        Discover Your Next Adventure
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            color: '#ffffff',
                            fontWeight: 500,
                            mb: 3,
                        }}
                    >
                        Choose from our curated experiences, customized for every kind of traveler.
                    </Typography>

                    <Box
                        component="button"
                        sx={{
                            px: 5,
                            py: 1.5,
                            fontSize: '1rem',
                            fontWeight: 600,
                            color: '#fff',
                            borderRadius: 2,
                            border: 'none',
                            cursor: 'pointer',
                            background: 'linear-gradient(to right, #0072ff, #00c6ff)',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                            '&:hover': {
                                background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                                boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
                                transform: 'scale(1.05)',
                            }
                            }
                        }
                            >
                            Book Now
                    </Box>
        </Container>
            </Box >

    {/* Features Section */ }
    < Container maxWidth = "lg" sx = {{ py: 3 }}>
        <Grid container spacing={4} justifyContent="center" textAlign="center ">
            {['Easy Booking', 'Curated Destinations', 'Trusted Support'].map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                    <Paper
                        elevation={0}
                        sx={{
                            color: '#0072ff',
                            p: 3,
                            borderRadius: 2,
                            height: '100%',
                            bgcolor: '#f0f4f8',
                            transition: 'box-shadow 0.4s ease-in-out, background-color 0.4s ease-in-out',
                            '&:hover': {
                                boxShadow: 3,
                                bgcolor: '#ced4da',
                            },
                        }}
                    >
                        <Typography variant="h6">{item}</Typography>
                    </Paper>
                </Grid>
            ))}
        </Grid>
            </Container >

    {/* Popular Destinations */ }
    < Container sx = {{ mt: 8 }}>
                <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: 800,  color  : 'teal',  fontFamily : 'Poppins' }}>
                    Explore Most Popular Destinations
                </Typography>
                <Typography align="center" sx={{ mb: 4 }}>
                    Plan your perfect trip with our most loved and best-selling tour packages.
                </Typography>
                <DestinationList />
            </Container >

    {/* Advantages Section */ }
    < AdvantagesSection />

    {/* Top Selling Tour Packages */ }
    < Container sx = {{ mt: 8 }}>
                <Typography variant="h4" align="center" gutterBottom  sx={{ fontWeight: 800, color: 'teal', fontFamily: 'Poppins' }}>
                    Top Selling Tour Packages of India
                </Typography>
                <Typography align="center" sx={{ mb: 4 }}>
                    Stay updated with our latest travel deals and experiences.
                </Typography>
                <TopPackages />
            </Container >

    <TestimonialsSection />
        </Box >
    );
};

export default TravelHomePage;
