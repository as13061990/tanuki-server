const User = require('../models/user');

module.exports = app => {
  app.post('/setNewScore', (req, res) => {
    const { tgId, points } = req.body;
    const result = { error: false };
    const user = User.findOne({ tgId: tgId }).then(data => data);
    if (user) {
      User.updateOne({ _id: user.id }, {
        $set: { points: points, pointsTime: parseInt(new Date().getTime() / 1000, 10) },
      }).then(() => null);
    } else {
      result.error = true;
    }
    res.json(result);
  });
};
