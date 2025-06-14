import { Container, Grid, Paper, Typography, Avatar, Box, Stack } from '@mui/material';

// Mock testimonial data
const testimonials = [
  {
    name: 'Aarav Sharma',
    role: 'Founder, WanderHub',
    message: 'This platform helped me plan an unforgettable experience. The interface is smooth and the options are great!',
    avatar: 'public/profile-1.jpeg', 
  },
  {
    name: 'Meera Patel',
    role: 'Creative Director, TripNest',
    message: 'Simple, intuitive, and super useful! It’s my go-to recommendation for travel planning.',
    avatar: 'public/profile-2.jpg',
  },
  {
    name: 'Rohit Verma',
    role: 'Travel Specialist, IndiaTours',
    message: 'I loved the experience. From browsing to booking — everything was seamless and quick!',
    avatar: 'public/profile-3.jpeg',
  },
];

const TestimonialsSection = () => (
  <Container sx={{ mt: 10, mb: 8 }}>
    <Typography variant="h3" align="center" fontWeight={600} gutterBottom color="#003566">
      Testimonials
    </Typography>

    <Grid container spacing={4} sx={{ mt: 2 }}>
      {testimonials.map((t, i) => (
        <Grid item xs={12} md={4} key={i}>
          <Paper
            elevation={3}
            sx={{
              p: 3,
              borderRadius: 4,
              maxWidth: 350,
              width: '100%',
              height: '100%',
              position: 'relative',
              overflow: 'hidden',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'translateY(-6px)',
                boxShadow: 6,
              },
            }}
          >
            
            <Avatar
              src={t.avatar}
              alt={t.name}
              sx={{
                width: 70,
                height: 70,
                position: 'absolute',
                top: 10,
                left: 16,
                border: '2px solid white',
              }}
            />

            <Box mt={8}>
              <Typography variant="body2" color="text.secondary" mb={3}>
                “{t.message}”
              </Typography>

              <Typography variant="subtitle1" fontWeight={600}>
                {t.name}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                {t.role}
              </Typography>
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default TestimonialsSection;
