// controllers/sleepController.js

const SleepEntry = require('../models/SleepEntry');

// Get all sleep entries
exports.getAllSleepEntries = async (req, res) => {
    try {
        const entries = await SleepEntry.find();
        res.json(entries);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new sleep entry
exports.createSleepEntry = async (req, res) => {
    const { date, sleepTime, wakeupTime, sleepDuration } = req.body;

    try {
        const newEntry = new SleepEntry({
            date,
            sleepTime,
            wakeupTime,
            sleepDuration
        });

        await newEntry.save();
        res.json(newEntry);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a sleep entry
exports.updateSleepEntry = async (req, res) => {
    const { date, sleepTime, wakeupTime, sleepDuration } = req.body;

    try {
        let entry = await SleepEntry.findById(req.params.id);

        if (!entry) {
            return res.status(404).json({ msg: 'Sleep entry not found' });
        }

        entry.date = date;
        entry.sleepTime = sleepTime;
        entry.wakeupTime = wakeupTime;
        entry.sleepDuration = sleepDuration;

        await entry.save();
        res.json(entry);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a sleep entry
exports.deleteSleepEntry = async (req, res) => {
    try {
        let entry = await SleepEntry.findById(req.params.id);

        if (!entry) {
            return res.status(404).json({ msg: 'Sleep entry not found' });
        }

        await entry.remove();
        res.json({ msg: 'Sleep entry removed' });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
