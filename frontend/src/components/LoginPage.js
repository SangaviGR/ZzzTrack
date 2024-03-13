import React from 'react';
import { Button } from '@mui/material';

const LoginPage = () => {
    return (
        <div>
            <Button variant="contained" color="primary">Login with Google</Button>
            <Button variant="contained" color="primary">Login with Facebook</Button>
        </div>
    );
};

export default LoginPage;
