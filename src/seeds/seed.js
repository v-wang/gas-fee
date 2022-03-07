// seed.js

const TargetFee = require('../models/TargetFee');
const targetFeeSeed = require('./targetFeeSeed.json');

TargetFee.deleteMany({}).then(() => {
  TargetFee.insertMany(targetFeeSeed).then(console.log).catch(console.error);
});
