const Stats = require('../models/stats');

module.exports = class Statistics {
  static incGamesCount() {
    Stats.updateOne({}, { $inc: { gamesCount: 1 } }).then(() => null);
  }
};
