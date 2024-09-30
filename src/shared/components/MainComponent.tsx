import React from 'react';
import { Box, Typography } from '@mui/material';

import CommentForm from './CommentForm';
import CommentList from './CommentList';

const MainComponent: React.FC = () => {
    return (
        <>
            <Typography 
                mb={4}
                variant="h4" 
                gutterBottom align="center"
            >
                Comment App
            </Typography>

            <Box mb={4}
                display="flex"
                flexDirection={{ xs: 'column', sm: 'row' }}
                alignItems="start"
                gap={2}>
                <CommentForm />
                <CommentList />
            </Box>
        </>
    );
};

export default MainComponent;
