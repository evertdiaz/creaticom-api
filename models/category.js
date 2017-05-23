
const mongoose = require('mongoose')
const Schema = mongoose.Schema

var categorySchema = new Schema({
  name: String,
  description: String
})
mongoose.model('category', categorySchema)
var Category = mongoose.model('category')

module.exports = Category


// var mongoose = require('mongoose')

// module.exports = mongoose.model('category', {
//   name: String,
//   description: String
// })
