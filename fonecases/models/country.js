var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');


var CountrySchema = new mongoose.Schema({
  name: String,
  dial_code: String,
  code: String,
  active:{ type: Boolean, default: true }
});


CountrySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('country', CountrySchema);