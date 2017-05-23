var mongoose = require('mongoose')
var Schema = mongoose.Schema

module.exports = mongoose.model('obra', {
  name: String,
  description: String,
  month: String,
  year: Number,
  mainImg: String,
  author: {
    type: Schema.ObjectId,
    ref: 'user'
  },
  category: {
    type: Schema.ObjectId,
    ref: 'category'
  },
  subcategory: {
    type: Schema.ObjectId,
    ref: 'subcategory'
  }
})
