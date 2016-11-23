var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');


var InvoiceSchema = new mongoose.Schema({
  name: String,
  info: String,
  active: Boolean
});

InvoiceSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('invoice',InvoiceSchema);