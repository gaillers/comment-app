import React from 'react';
import { Box, CircularProgress } from '@mui/material';

const LoadingSpinner: React.FC = () => (
  <Box display="flex" justifyContent="center" mt={2}>
    <CircularProgress />
  </Box>
);

export default LoadingSpinner;
