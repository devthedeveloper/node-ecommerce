var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var MediaSchema = new mongoose.Schema({
  originalFilename: String,
  path: String,
  size: String,
  type: String,
  name: String,
  active: Boolean
});

MediaSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('media', MediaSchema);