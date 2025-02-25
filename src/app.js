// src/app.js
const express = require('express');
const cors = require('cors');
const dataRoutes = require('./routes/dataRoutes');
const app = express();

app.use(express.json());
app.use(cors());
app.use('/api', dataRoutes);

module.exports = app;
