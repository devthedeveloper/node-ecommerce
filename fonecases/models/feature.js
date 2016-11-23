var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var FeatureSchema = new mongoose.Schema({
  key: String,
  val: String,
  info: String,
  active: Boolean
});

FeatureSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('feature', FeatureSchema);