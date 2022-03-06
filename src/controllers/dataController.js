// dataController.js

// Fetch data from ETH Gas Station API
// https://docs.ethgasstation.info/

const express = require('express');
const router = express.Router();
const axios = require('axios');

const url = 'https://ethgasstation.info/api/ethgasAPI.json?api-key=';

const fetchFee = () => {
  setInterval(() => {
    axios
      .get(`${url}${process.env.ETH_GAS_STATION_KEY}`)
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, 4000);
};

const saveFee = async (fee) => {};

const calcHourAvg = async (fees) => {};

const saveHourAvg = async (avg) => {};

// fetchFee();

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
