import React from 'react';
import { Box, Typography } from '@mui/material';

interface ErrorMessageProps {
  message: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <Box mt={2}>
    <Typography color="error">{`Error: ${message}`}</Typography>
  </Box>
);

export default ErrorMessage;
