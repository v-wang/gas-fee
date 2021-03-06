// TargetFee.js
const mongoose = require('../configs/connection');

const TargetFeeSchema = new mongoose.Schema(
  {
    fast: Number,
    fastest: Number,
    safeLow: Number,
    average: Number,
    block_time: Number,
    blockNum: Number,
    speed: Number,
    safeLowWait: Number,
    avgWait: Number,
    fastWait: Number,
    fastestWait: Number,
    gasPriceRange: {
      4: { type: Number, default: null },
      6: { type: Number, default: null },
      8: { type: Number, default: null },
      10: { type: Number, default: null },
      20: { type: Number, default: null },
      30: { type: Number, default: null },
      40: { type: Number, default: null },
      50: { type: Number, default: null },
      60: { type: Number, default: null },
      70: { type: Number, default: null },
      80: { type: Number, default: null },
      90: { type: Number, default: null },
      100: { type: Number, default: null },
      110: { type: Number, default: null },
      120: { type: Number, default: null },
      130: { type: Number, default: null },
      140: { type: Number, default: null },
      150: { type: Number, default: null },
      160: { type: Number, default: null },
      170: { type: Number, default: null },
      180: { type: Number, default: null },
      190: { type: Number, default: null },
      200: { type: Number, default: null },
      210: { type: Number, default: null },
      220: { type: Number, default: null },
      230: { type: Number, default: null },
      240: { type: Number, default: null },
      250: { type: Number, default: null },
      260: { type: Number, default: null },
      270: { type: Number, default: null },
      280: { type: Number, default: null },
      290: { type: Number, default: null },
      300: { type: Number, default: null },
      310: { type: Number, default: null },
      320: { type: Number, default: null },
      330: { type: Number, default: null },
      340: { type: Number, default: null },
      350: { type: Number, default: null },
      360: { type: Number, default: null },
      370: { type: Number, default: null },
      380: { type: Number, default: null },
      390: { type: Number, default: null },
      400: { type: Number, default: null },
      410: { type: Number, default: null },
      420: { type: Number, default: null },
      430: { type: Number, default: null },
      440: { type: Number, default: null },
      450: { type: Number, default: null },
      460: { type: Number, default: null },
      470: { type: Number, default: null },
      480: { type: Number, default: null },
      490: { type: Number, default: null },
      500: { type: Number, default: null },
      510: { type: Number, default: null },
      520: { type: Number, default: null },
      530: { type: Number, default: null },
      540: { type: Number, default: null },
      550: { type: Number, default: null },
      560: { type: Number, default: null },
      570: { type: Number, default: null },
      580: { type: Number, default: null },
      590: { type: Number, default: null },
      600: { type: Number, default: null },
      610: { type: Number, default: null },
      620: { type: Number, default: null },
      630: { type: Number, default: null },
      640: { type: Number, default: null },
      650: { type: Number, default: null },
      660: { type: Number, default: null },
      670: { type: Number, default: null },
      680: { type: Number, default: null },
      690: { type: Number, default: null },
      700: { type: Number, default: null },
      710: { type: Number, default: null },
      720: { type: Number, default: null },
      730: { type: Number, default: null },
      740: { type: Number, default: null },
      750: { type: Number, default: null },
      760: { type: Number, default: null },
      770: { type: Number, default: null },
      780: { type: Number, default: null },
      790: { type: Number, default: null },
      800: { type: Number, default: null },
      // },
      // expireAt: {
      //   type: Date,
      //   default: Date.now,
      //   expires: 120,
      // },
    },
  },
  { timestamps: true }
);

const TargetFee = mongoose.model('TargetFee', TargetFeeSchema);

module.exports = TargetFee;
