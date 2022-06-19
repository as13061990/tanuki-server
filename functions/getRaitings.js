const User = require('../models/user');

module.exports = async user => {
  const result = {
    raitings: [],
    user: {
      place: 0,
      name: user.name,
      points: user.points,
    },
  };

  const raitings = await User.find({}).limit(5).sort({ points: -1, pointsTime: 1 });

  let isTop = false;
  for (let i = 0; i < raitings.length; i += 1) {
    if (raitings[i]) {
      if (String(raitings[i].id) === String(user.id)) {
        isTop = true;
        result.user.place = i + 1;
      }
      result.raitings.push({
        place: i + 1,
        points: raitings[i].points,
        name: raitings[i].name,
      });
    }
  }

  if (!isTop) {
    const count = await User.countDocuments({ points: { $gt: user.points } });
    result.user.place = count + 6;
  }
  result.user.name = user.name;
  result.user.points = user.points;
  return result;
};
