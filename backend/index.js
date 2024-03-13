// server.js

const express = require('express');
const mongoose = require('mongoose');
const sleepController = require('./controllers/sleepController');

mongoose.connect('mongodb://localhost:27017/sleeptracker', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        const app = express();

        app.use(express.json());

        // Define routes
        app.post('/api/sleep-entries', sleepController.createSleepEntry);
        app.get('/api/sleep-entries', sleepController.getAllSleepEntries);
        app.put('/api/sleep-entries/:id', sleepController.updateSleepEntry);
        app.delete('/api/sleep-entries/:id', sleepController.deleteSleepEntry);

        app.listen(5000, () => {
            console.log('Server running on port 5000');
        });
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err.message);
    });
