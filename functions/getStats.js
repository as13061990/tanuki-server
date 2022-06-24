const Users = require('../models/user');
const Stats = require('../models/stats');

module.exports = app => {
  app.get('/getStats', async (req, res) => {
    const statsData = await Stats.findOne({}, { _id: 0, __v: 0 }).then(data => data);
    const usersData = await Users.find({}, {
      _id: 0,
      __v: 0,
      time: 0,
      attempts: 0,
    }).then(data => data);
    usersData.sort((b, a) => {
      if (a.points < b.points) return -1;
      if (a.points > b.points) return 1;
      if (a.pointsTime < b.pointsTime) return -1;
      if (a.pointsTime > b.pointsTime) return 1;
      return 0;
    });

    res.json({ stats: statsData, users: usersData });
  });
};
