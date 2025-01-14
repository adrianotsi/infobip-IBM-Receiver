const serverless = require('serverless-http');
const express = require('express');
const webhookController = require('../controllers/webhookController');

const app = express();
app.use(express.json());

app.post('/api/webhook', webhookController.handleWebhook);

module.exports = app;
module.exports.handler = serverless(app);
