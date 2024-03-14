const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const connectDB = require('./config/connectDB');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
dotenv.config({ path: path.join(__dirname, 'config', 'config.env') });

connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use('/api/v1/sleep-entries', require('./Routes/sleepRoutes'));

// Error handler
app.use(errorHandler);

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server listening on Port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
