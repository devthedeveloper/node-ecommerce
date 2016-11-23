var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');


var SettingSchema = new mongoose.Schema({
  minOrderValue: Number,
  shippingCharge: Number
});

SettingSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('setting', SettingSchema);