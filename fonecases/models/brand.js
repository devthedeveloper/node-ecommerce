var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var BrandSchema = new mongoose.Schema({
  name: String,
  slug: String,
  info: String,
  parent: String,
  image: String,
  uid: String,
  brand: Number,
  active: { type: Boolean, default: true },
  updated: {type: Date, default: Date.now}
});

BrandSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('brand', BrandSchema);
