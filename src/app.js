const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorMiddleware');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

// Error handling middleware
app.use(errorHandler);

module.exports = app;
