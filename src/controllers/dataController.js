// dataController.js

// Fetch data from ETH Gas Station API
// https://docs.ethgasstation.info/

const express = require('express');
const router = express.Router();
const axios = require('axios');
const TargetFee = require('../models/TargetFee');

const url = 'https://ethgasstation.info/api/ethgasAPI.json?api-key=';

const targetCalc = async () => {};
const minuteCalc = async () => {};
const hourCalc = async () => {};

const fetchFee = () => {
  axios
    .get(`${url}${process.env.ETH_GAS_STATION_KEY}`)
    .then((data) => {
      return data.data;
    })
    .then((data) => {
      TargetFee.create(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const calcMinuteAvg = () => {
  TargetFee.find({}).then((data) => {
    console.log(data);
  });
};

calcMinuteAvg();

const calcHourAvg = async (fees) => {};

const saveHourAvg = async (avg) => {};

// setInterval(() => {
//   fetchFee();
// }, 4000);

// setInterval(() => {
//   calcMinuteAvg();
// }, 60000);

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
