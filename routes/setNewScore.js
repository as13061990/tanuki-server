const User = require('../models/user');
const Statistics = require('../classes/Statistics');

module.exports = app => {
  app.post('/setNewScore', async (req, res) => {
    const { tgId, points } = req.body;
    const result = { error: false };
    const user = await User.findOne({ tgId: tgId }).then(data => data);
    if (user) {
      User.updateOne({ _id: user.id }, {
        $set: {
          points: user.points > points ? user.points : points,
          pointsTime: parseInt(new Date().getTime() / 1000, 10),
        },
      }).then(() => null);
      Statistics.incGamesCount();
    } else {
      result.error = true;
    }
    res.json(result);
  });
};
