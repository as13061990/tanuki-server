const mongoose = require('mongoose');
const constants = require('../data/constants');

const userSchema = new mongoose.Schema({
  tgId: {
    type: String,
    required: true,
    index: true,
  },
  time: {
    type: Number,
    required: true,
    default: 0,
  },
  points: {
    type: Number,
    required: true,
    default: 0,
    index: true,
  },
  pointsTime: {
    type: Number,
    required: true,
    default: 0,
    index: true,
  },
  name: {
    type: String,
    required: true,
  },
  attempts: {
    type: Number,
    required: true,
    default: constants.ATTEMPTS_COUNT,
  },
  referrers: {
    type: [String],
    required: true,
    default: [],
  },
});

module.exports = mongoose.model('user', userSchema);
