const express = require('express')
const bp = require('body-parser')
const morgan = require('morgan')
const mongoose = require('mongoose')
const cors = require('cors')
const controller = require('./controller')
const app = express()
const port = process.env.PORT || 6000

app.use(bp.urlencoded({ extended: false }))
app.use(bp.json())
app.use(morgan('dev'))
app.use(cors())

app.use('/', controller)

mongoose.connect('mongodb://articom-network.cloudapp.net:27017/articomdb')

app.listen(port, () => {
  console.log('Servidor iniciado en ' + port)
})
