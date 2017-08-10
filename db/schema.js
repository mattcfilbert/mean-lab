const mongoose = require('./connection.js')

const CharacterSchema = new mongoose.Schema({
  name: String,
  description: String,
  image_url: String,
  marvel_id: Number
})

const Character = mongoose.model('Character', CharacterSchema)

module.exports = Character
