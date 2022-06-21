const constants = require('../data/constants');
const User = require('../models/user');

const randomInt = (min, max) => Math.round(Math.random() * (max - min) + min);

const checkDaily = user => {
  let newDay = new Date();
  newDay.setHours(0);
  newDay.setMinutes(0);
  newDay.setSeconds(0);
  newDay = Math.round(newDay.getTime() / 1000);

  if (user.time < newDay) {
    user.attempts = constants.ATTEMPTS_COUNT;
  }

  user.time = Math.round(new Date().getTime() / 1000);
  User.updateOne({ _id: user.id }, { $set: { time: user.time, attempts: user.attempts } })
    .then(() => null);

  return user.attempts;
};

module.exports = {
  randomInt,
  checkDaily,
};
