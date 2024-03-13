import React from 'react';
import { Modal, Button } from '@mui/material';

const NewUserLogin = () => {
    return (
        <Modal>
            <div>
                {/* Add your form elements here */}
                <Button variant="contained" color="primary">Submit</Button>
                <Button variant="contained" color="secondary">Cancel</Button>
            </div>
        </Modal>
    );
};

export default NewUserLogin;
