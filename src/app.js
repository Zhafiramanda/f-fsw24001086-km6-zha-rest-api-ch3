const express = require('express');
const app = express();
const carsRoutes = require('./routes/carsRoutes');

app.use(express.json());

// Routes
app.use('/cars', carsRoutes);

module.exports = app;
