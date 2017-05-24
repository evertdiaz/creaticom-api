const express = require('express')
const bp = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const cookieParser = require('cookie-parser')
const port = process.env.PORT || 8000

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(morgan('dev'))
app.use(cors())
app.use(cookieParser())

var apiController = require('./routes/controller')
app.use('/api', apiController)

mongoose.connect('mongodb://articom-network.cloudapp.net:27017/articomdb')

app.listen(port, () => {
  console.log('Servidor iniciado en ' + port)
})
