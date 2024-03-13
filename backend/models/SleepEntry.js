const mongoose = require('mongoose');

const sleepEntrySchema = new mongoose.Schema({
    date: { type: Date, required: true },
    sleepTime: { type: Number, required: true },
    wakeupTime: { type: Number, required: true },
    sleepDuration: { type: Number, required: true },
});

const SleepEntry = mongoose.model('SleepEntry', sleepEntrySchema);

module.exports = SleepEntry;
