const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/cookies_db', { useMongoClient: true })

module.exports = mongoose
