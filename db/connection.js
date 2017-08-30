const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cookies')

module.exports = mongoose
