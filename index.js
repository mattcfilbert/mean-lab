const express = require('express')
const parser = require('body-parser')

const Character = require('./db/schema.js')

const app = express()

app.set('port', process.env.PORT || 3001)
app.use('/assets', express.static('public'))
app.use('/node_modules', express.static('node_modules'))
app.use(parser.json({ extended: true}))

app.get('/characters', (req, res) => {
  Character.find({}, null, {sort: {name: 1}}).then((characters) => {
    res.json(characters)
  })
})

app.get('/characters/:id', (req, res) => {
  Character.findOne({ _id: req.params.id }).then((character) => {
    res.json(character)
  })
})

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
