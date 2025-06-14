import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  CardMedia,
  Box,
} from '@mui/material';

// Fetcher function
const fetchDestinations = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/destinations`);
  console.log("Destination Data:", response.data);
  return response.data;
};

const DestinationList = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['destinations'],
    queryFn: fetchDestinations,
  });

  if (isPending) return <Box display="flex" justifyContent="center" mt={4}><CircularProgress /></Box>;
  if (error) return <Typography color="error" textAlign="center">Failed to load data.</Typography>;

  return (
    <Grid container spacing={4} sx={{ px: 2, py: 4 }}>
      {data.destinations.map((dest) => (
        <Grid item xs={12} sm={6} md={6} lg={4} key={dest._id}>
          <Card
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              maxWidth: 350,
              borderRadius: 4,
              boxShadow: 3,
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'scale(1.03)',
              },
            }}
          >
            {dest.image && (
              <CardMedia
                component="img"
                height="200"
                image={dest.image}
                alt={dest.name}
              />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
                <Typography
                  variant="h6"
                  fontWeight={500}
                  noWrap
                  sx={{
                    fontSize: '1rem',
                    color: 'teal',

                    maxWidth: '60%',
                  }}
                >
                  {dest.name}
                </Typography>
                <Box display="flex" alignItems="center" gap={0.5}>
                  <Typography variant="body2" color="text.secondary">
                    Starting from
                  </Typography>
                  <Typography variant="h6" sx={{ color: 'teal', whiteSpace: 'nowrap' }}>
                    ₹{dest.price}
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>


  );
};

export default DestinationList;
