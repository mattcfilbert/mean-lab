const mongoose = require('./connection.js')

const CookieSchema = new mongoose.Schema({
  flavor: String,
  quantity: Number,
  img_url: String
})

const Cookie = mongoose.model('Cookie', CookieSchema)

module.exports = Cookie
