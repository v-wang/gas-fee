// dependencies
require('dotenv').config();
const express = require('express');
const app = express();

// configs
app.use(express.json());
app.use('/data', dataController.router);

//https://ethgasstation.info/api/ethgasAPI.json?api-key=

const appController = require('./src/controllers/appController');
const dataController = require('./src/controllers/dataController');

app.listen(4000, () => {
  console.log('app listening on port 4000');
});

module.exports = app;
