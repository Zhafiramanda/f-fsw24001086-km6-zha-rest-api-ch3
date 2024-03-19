const express = require('express');
const app = express();
const carsRoutes = require('./routes/carsRoutes');

app.use(express.json());

// Routes
app.use('/cars', carsRoutes);

app.get('/', (req, res) => {
    res.json({ message: 'Ping Succesfuly!' })
})

module.exports = app;
