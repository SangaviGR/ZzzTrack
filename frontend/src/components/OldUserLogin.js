// OldUserLogin.js

import React, { useState, useEffect } from 'react';
import { Typography, Button } from '@mui/material';
import axios from 'axios';
import NewEntryModal from './Modal'; // Import the NewEntryModal component

const OldUserLogin = () => {
    const [entries, setEntries] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        axios.get('/api/sleep-entries')
            .then(response => {
                setEntries(response.data);
            })
            .catch(error => {
                console.error('Error fetching sleep entries:', error);
            });
    }, []);

    const handleNewEntry = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    return (
        <div>
            <Typography variant="h2">Entries for Last 7 Days</Typography>
            {/* Render the list of entries here */}
            {entries.map(entry => (
                <div key={entry._id}>
                    <Typography>Date: {entry.date}</Typography>
                    <Typography>Sleep Time: {entry.sleepTime}</Typography>
                    <Typography>Wake-up Time: {entry.wakeupTime}</Typography>
                    <Typography>Sleep Duration: {entry.sleepDuration} hours</Typography>
                </div>
            ))}
            <Button variant="contained" color="primary" onClick={handleNewEntry}>New Entry</Button>
            <NewEntryModal open={modalOpen} handleClose={handleCloseModal} />
        </div>
    );
};

export default OldUserLogin;
