const express = require('express')
const parser = require('body-parser')
// const router = express.Router()
const Cookie = require('./db/schema.js')

const app = express()

app.use(express.static('public'))
app.use('/node_modules', express.static('node_modules'))
app.use(parser.json())

app.get('/api/cookies', (req, res) => {
  Cookie.find({}).then((cookies) => {
    res.json(cookies)
  })
})

app.post('/api/cookies', (req, res) => {
  Cookie.create(req.body).then((cookie) => {
    res.status(200).json(cookie)
  })
})

app.get('/api/cookies/:id', (req, res) => {
  Cookie.findOne({ _id: req.params.id }).then((cookie) => {
    res.json(cookie)
  })
})

app.put('/api/cookies/:id', (req, res) => {
  Cookie.findOneAandUpdate({ _id: req.params.id }).then((cookie) => {
    res.status(200).json(cookie)
  })
})

app.delete('/api/cookies/:id', (req, res) => {
  Cookie.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.status(200).send('Cookie eaten')
  })
})

app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.listen(4000, () => {
  console.log('app listening on port 4000')
})
