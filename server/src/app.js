console.log('hello')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const { sequelize } = require('./models')
const config = require('./config/config')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

// app.get('/status', (req, res) => {
//   res.send({
//     message: 'hello world!!!'
//   })
// })

require('./passport')
require('./routes')(app)

sequelize.sync({ force: false })
  // Do not use this. it will drop tables
  // {
  //   force: true
  // }
  .then(() => {
    app.listen(config.port)
    console.log(`Server started on port ${config.port}`)
  })
