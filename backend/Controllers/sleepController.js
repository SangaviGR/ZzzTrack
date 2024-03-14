const SleepEntry = require('../models/SleepEntry');

// Get all sleep entries
exports.getAllSleepEntries = async (req, res, next) => {
    try {
        const entries = await SleepEntry.find();
        res.status(200).json({
            success: true,
            count: entries.length,
            data: entries
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Create a new sleep entry
exports.createSleepEntry = async (req, res, next) => {
    try {
        const { date, sleepTime, wakeupTime, sleepDuration } = req.body;
        const newEntry = new SleepEntry({
            date,
            sleepTime,
            wakeupTime,
            sleepDuration
        });
        await newEntry.save();
        res.status(201).json({
            success: true,
            data: newEntry
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Update a sleep entry
exports.updateSleepEntry = async (req, res, next) => {
    try {
        const { date, sleepTime, wakeupTime, sleepDuration } = req.body;
        let entry = await SleepEntry.findById(req.params.id);
        if (!entry) {
            return res.status(404).json({ msg: 'Sleep entry not found' });
        }
        entry.date = date;
        entry.sleepTime = sleepTime;
        entry.wakeupTime = wakeupTime;
        entry.sleepDuration = sleepDuration;
        await entry.save();
        res.status(200).json({
            success: true,
            data: entry
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};

// Delete a sleep entry
exports.deleteSleepEntry = async (req, res, next) => {
    try {
        let entry = await SleepEntry.findById(req.params.id);
        if (!entry) {
            return res.status(404).json({ msg: 'Sleep entry not found' });
        }
        await entry.remove();
        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
};
