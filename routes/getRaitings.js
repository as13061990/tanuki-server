const getRaitings = require('../functions/getRaitings');
const User = require('../models/user');

module.exports = app => {
  app.post('/getRaitings', async (req, res) => {
    const { tgId } = req.body;
    const user = await User.findOne({ tgId }).then(data => data);
    const raitings = getRaitings(user);

    return res.json(raitings);
  });
};
