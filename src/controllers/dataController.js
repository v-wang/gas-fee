// dataController.js

// Fetch data from ETH Gas Station API
// https://docs.ethgasstation.info/

const express = require('express');
const router = express.Router();
const axios = require('axios');

setInterval(() => {
  axios
    .get(
      `https://ethgasstation.info/api/ethgasAPI.json?api-key=${process.env.ETH_GAS_STATION_KEY}`
    )
    .then((data) => {
      console.log(data.data);
    })
    .then((data) => {
      // res.send(data);
    });
}, 4000);

router.get('/ping', (req, res) => {
  res.json({ status: 'ok' });
});

router.get('/fetch-fee', (req, res) => {
  // setInterval(() => {
  //   axios
  //     .get(
  //       `https://ethgasstation.info/api/ethgasAPI.json?api-key=${process.env.ETH_GAS_STATION_KEY}`
  //     )
  //     .then((data) => {
  //       res.send({ payload: data.data });
  //     })
  //     .then((data) => {
  //       // res.send(data);
  //     });
  // }, 2000);
});

module.exports = router;
