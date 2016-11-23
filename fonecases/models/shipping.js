var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var ShippingSchema = new mongoose.Schema({
  name: String,
  info: String,
  carrier: String,
  country: String,
  charge: Number,
  minWeight: Number,
  maxWeight: Number,
  freeShipping: Number,
  active: Boolean
});

ShippingSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('shipping', ShippingSchema);