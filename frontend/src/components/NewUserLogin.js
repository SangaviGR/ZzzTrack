import React, { useState } from 'react';
import { Modal, Button, Typography, Box, TextField, Stack } from '@mui/material';

const NewUserLogin = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <Button variant="contained" color="primary" onClick={handleOpen}>New Entry</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="new-entry-modal-title"
                aria-describedby="new-entry-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                        boxShadow: 24,
                        p: 4,
                        maxWidth: 400,
                        width: '90%',
                    }}
                >
                    <Typography variant="h5" id="new-entry-modal-title" gutterBottom>
                        New Entry
                    </Typography>
                    <Stack spacing={2}>
                        <TextField
                            id="date"
                            label="Date"
                            type="date"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                        <TextField
                            id="sleep-time"
                            label="Sleep Time"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min intervals
                            }}
                        />
                        <TextField
                            id="wakeup-time"
                            label="Wake-up Time"
                            type="time"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            inputProps={{
                                step: 300, // 5 min intervals
                            }}
                        />
                    </Stack>
                    {/* Additional fields and buttons can be added here */}
                    <Button variant="contained" color="primary" sx={{ mr: 2 }}>Submit</Button>
                    <Button variant="contained" color="error" onClick={handleClose}>Cancel</Button>
                </Box>
            </Modal>
        </div>
    );
};

export default NewUserLogin;
