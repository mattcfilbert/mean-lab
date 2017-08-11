const mongoose = require('mongoose')

mongoose.connect(process.env.MONGOLAB_CRIMSON_URI || 'mongodb://localhost/meansuperheroes')

module.exports = mongoose
