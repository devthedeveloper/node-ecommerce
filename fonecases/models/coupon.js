var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var CouponSchema = new mongoose.Schema({
  code: String,
  amount: Number,
  type: { type: String, default: 'Discount' },
  active: { type: Boolean, default: true },
  info: String,
  minimumCartValue: Number
});


CouponSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('coupon', CouponSchema);