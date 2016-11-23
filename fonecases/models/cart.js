var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var CartSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

CartSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('cart', CartSchema);