import {
  Container,
  Typography,
  Grid,
  Paper,
  Stack,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import GroupsIcon from '@mui/icons-material/Groups';
import LayersIcon from '@mui/icons-material/Layers';
import { keyframes } from '@emotion/react';

// Bounce animation
const bounce = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
`;

const advantages = [
  {
    icon: <AccessTimeIcon sx={{ fontSize: 40, color: '#0072ff' }} />,
    title: 'Save Time',
    desc: 'No more switching for packages or plans.',
  },
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 40, color: '#4caf50' }} />,
    title: 'Save Money',
    desc: 'Compare, negotiate, and choose the best.',
  },
  {
    icon: <GroupsIcon sx={{ fontSize: 40, color: '#ff9800' }} />,
    title: 'Trusted Network',
    desc: 'A Trusted Network of 7000+ Travel Agents.',
  },
  {
    icon: <LayersIcon sx={{ fontSize: 40, color: '#9c27b0' }} />,
    title: 'Multiple Options',
    desc: 'Itineraries & Travel Tips from Trusted Agents.',
  },
];

const AdvantagesSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ backgroundColor: '#adb5bd', color: '#003566', py: 8 }}>
      <Container>
        <Typography variant="h4" align="center" fontWeight={700} gutterBottom>
          Our Advantages
        </Typography>
        <Typography align="center" sx={{ mb: 6, fontSize: isMobile ? 14 : 16 }}>
          You can rely on our experience and the quality of services we provide.
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {advantages.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper
                elevation={4}
                sx={{
                  p: 3,
                  borderRadius: 4,
                  textAlign: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-6px) scale(1.03)',
                    boxShadow: '0 12px 20px rgba(0,0,0,0.2)',
                  },
                }}
              >
                <Stack alignItems="center" spacing={2}>
                  <Box
                    sx={{
                      animation: `${bounce} 2s infinite`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      backgroundImage: 'linear-gradient(to right, #0072ff, #00c6ff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontWeight: 600,
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AdvantagesSection;
