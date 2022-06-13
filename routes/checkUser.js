const User = require('../models/user');
const constants = require('../data/constants');
const {
  checkDaily,
} = require('../functions/utils');

module.exports = app => {
  app.post('/checkUser', async (req, res) => {
    const { tgId, name } = req.body;
    const result = {
      points: 0,
      attempts: constants.ATTEMPTS_COUNT,
    };

    const user = await User.findOne({ tgId }).then(data => data);

    if (user) {
      result.points = user.points;
      result.attempts = checkDaily(user);
    } else {
      const time = Math.round(new Date().getTime() / 1000);
      User.create({ tgId: tgId, name: name, time: time }).then(() => null);
    }

    return res.json(result);
  });
};
