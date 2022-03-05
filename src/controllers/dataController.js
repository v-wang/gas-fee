// dataController.js

// Fetch data from ETH Gas Station API
// https://docs.ethgasstation.info/

const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
  res.json({ status: 'ok' });
});

module.exports = router;
