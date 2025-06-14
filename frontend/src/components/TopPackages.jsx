import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
  CardMedia,
  Box,
} from '@mui/material';

const fetchPackages = async () => {
  const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/packages/top-selling`);
  return response.data;
};

const TopPackages = () => {
  const { data, isPending, error } = useQuery({
    queryKey: ['packages'],
    queryFn: fetchPackages,
  });

  if (isPending) return <Box display="flex" justifyContent="center" mt={4}><CircularProgress /></Box>;
  if (error) return <Typography color="error" textAlign="center">Failed to load packages.</Typography>;

  return (
    <Grid container spacing={4} sx={{ px: 2, py: 4 }}>
      {data.fetchAll.map((pkg) => (
        <Grid item xs={12} sm={6} md={4} key={pkg._id}>
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
            {pkg.image && (
              <CardMedia
                component="img"
                height="200"
                image={pkg.image}
                alt={pkg.title}
              />
            )}
            <CardContent sx={{ flexGrow: 1 }}>
              <Box display="flex" justifyContent="space-between" alignItems="center" gap={5}>
                <Typography
                  variant="h6"
                  fontWeight={500}
                  noWrap
                  sx={{
                    fontSize: '0.96rem',
                    color: '#3f51b5',
                    maxWidth: '60%',
                  }}
                >
                  {pkg.title}
                </Typography>
                <Typography variant="h6" sx={{ color: '#4caf50', whiteSpace: 'nowrap' }}>
                  ₹{pkg.price}
                </Typography>
              </Box>

              <Typography variant="body2" color="text.secondary" mt={1} mb={2}>
                {pkg.description || 'No description available'}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ mt: 'auto', borderRadius: 2 }}
              >
                View Details
              </Button>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default TopPackages;
