var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var PaymentMethodSchema = new mongoose.Schema({
  name: String,
  email: String,
  options: Object,
  active: {type: Boolean, default:true}
});

PaymentMethodSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('paymentmethod', PaymentMethodSchema);