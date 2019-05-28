let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
  'productId': String,
  'productName': String,
  'originalPrice': Number,
  'salePrice': Number,
  'productImg': String,
  'description': String
});

module.exports = mongoose.model('Good', productSchema);