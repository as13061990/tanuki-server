const mongoose = require('mongoose');

const statsSchema = new mongoose.Schema({
});

module.exports = mongoose.model('stats', statsSchema);
