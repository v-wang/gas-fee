// dependencies
require('dotenv').config();
const express = require('express');
const app = express();
const connection = require('./src/configs/connection');

const appController = require('./src/controllers/appController');
const dataController = require('./src/controllers/dataController');

// configs
app.use(express.json());
app.use('/data', dataController);

//https://ethgasstation.info/api/ethgasAPI.json?api-key=

module.exports = app;
