import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const SplashScreen = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                padding: '20px',
                backgroundImage: `url(https://source.unsplash.com/featured/?sleep)`, // Change the URL to any of the provided ones
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <Box
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.6)', // Adjust the transparency by modifying the fourth value (0.6 in this case)
                    padding: '20px',
                    borderRadius: '10px',
                    maxWidth: '600px',
                }}
            >
                <Typography variant="h1" sx={{ color: 'white', marginBottom: '20px' }}>Sleep Tracker</Typography>
                <Typography variant="body1" sx={{ color: 'white', marginBottom: '40px' }}>Track your sleep for better health!</Typography>
                <Typography variant="body2" sx={{ color: 'white' }}>
                    Welcome to Sleep Tracker! Our app helps you monitor your sleep patterns and provides insights to improve your sleep quality. With detailed analytics and personalized recommendations, you can achieve a more restful and rejuvenating sleep experience.
                </Typography>
                <Typography variant="body2" sx={{ color: 'white', marginTop: '20px' }}>
                    <Link href="/signup" sx={{ color: 'white', marginRight: '20px' }}>Sign Up</Link>
                    <Link href="/login" sx={{ color: 'white' }}>Log In</Link>
                </Typography>
            </Box>
        </Box>
    );
};

export default SplashScreen;
