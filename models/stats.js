const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
  gamesCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model('stats', statsSchema);
