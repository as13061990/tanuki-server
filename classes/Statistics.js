const Stats = require('../models/stats');

module.exports = class Statistics {
  static incGamesCount() {
    Stats.updateOne({}, { $inc: { gamesCount: 1 } }).then(() => null);
  }

  static addBotStarted(id) {
    Stats.updateOne({}, { $addToSet: { botStarted: id } }).then(() => null);
  }

  static addRefStarted(id) {
    Stats.updateOne({}, { $addToSet: { refStarted: id } }).then(() => null);
  }
};
