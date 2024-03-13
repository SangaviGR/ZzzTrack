import React from 'react';
import { Typography, Button } from '@mui/material';

const OldUserLogin = () => {
    return (
        <div>
            <Typography variant="h2">Entries for Last 7 Days</Typography>
            {/* Add your list of entries here */}
            <Button variant="contained" color="primary">New Entry</Button>
        </div>
    );
};

export default OldUserLogin;
