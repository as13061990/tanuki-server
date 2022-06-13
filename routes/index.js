const checkUser = require('./checkUser');
const getRaitings = require('./getRaitings');

module.exports = app => {
  checkUser(app);
  getRaitings(app);
};
