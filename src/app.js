const express = require('express');
const app = express();

const index = require('./controllers/index');
const token = require('./controllers/token');

app.use(express.urlencoded({extended: true}));
app.get('/', index);
app.post('/token', token);

module.exports = app;
