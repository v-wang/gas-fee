require('dotenv').config();
const express = require('express');
const app = express();

//https://ethgasstation.info/api/ethgasAPI.json?api-key=

app.listen(4000, () => {
  console.log('app listening on port 4000');
});
