// Controllers/sleepController.js

const SleepEntry = require('../models/SleepEntry');

const createSleepEntry = async (req, res) => {
    try {
        const { date, sleepTime, wakeupTime, sleepDuration } = req.body;
        const newEntry = new SleepEntry({ date, sleepTime, wakeupTime, sleepDuration });
        await newEntry.save();
        res.status(201).json(newEntry);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getSleepEntries = async (req, res) => {
    try {
        const entries = await SleepEntry.find();
        res.json(entries);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    createSleepEntry,
    getSleepEntries,
};
