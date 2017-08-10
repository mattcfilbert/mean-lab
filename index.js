const express = require('express')
const parser = require('body-parser')

const app = express()

app.set('port', process.env.PORT || 3001)
app.use('/assets', express.static("public"))
app.use(parser.json({ extended: true}))



app.listen(app.get('port'), () => {
  console.log(`Listening on ${app.get('port')}`)
})
