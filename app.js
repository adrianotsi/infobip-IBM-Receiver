const express = require('express');
const app = express();
const webhookRoutes = require('./routes/webhookRoutes');

// Middleware para interpretar JSON
app.use(express.json());

// Rotas
app.use('/webhook', webhookRoutes);

module.exports = app;
