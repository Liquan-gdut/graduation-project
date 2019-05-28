let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productSchema = new Schema({
  'homeImg': Array
});

module.exports = mongoose.model('Homes', productSchema);