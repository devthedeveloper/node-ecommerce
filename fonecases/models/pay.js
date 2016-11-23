var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');


var PaySchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

PaySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('pay', PaySchema);