const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = mongoose.model('subcategory', {
  name: String,
  description: String,
  category: {
    type: Schema.ObjectId,
    ref: 'category'
  }
})