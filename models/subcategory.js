const mongoose = require('mongoose')
const Schema = mongoose.Schema

var subCategorySchema = new Schema({
  name: String,
  description: String,
  category: {
    type: Schema.ObjectId,
    ref: 'category'
  }
})
mongoose.model('subcategory', subCategorySchema)
var SubCategory = mongoose.model('subcategory')

module.exports = SubCategory
// module.exports = mongoose.model('subcategory', {
//   name: String,
//   description: String,
//   category: {
//     type: Schema.ObjectId,
//     ref: 'category'
//   }
// })