var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
    
var AddressSchema = new mongoose.Schema({
  email: String,
  name: String,
  address: String,
  city: String,
  state: String,
  country: Object,
  zip: Number,
  phone: String,
  active: { type: Boolean, default: true },
  uid: { type: ObjectId, ref: 'User' }
},
{
    timestamps: true
});

// AddressSchema.pre('save', function(done) {
//   this.updatedAt = Date.now();
//   done();
// });

AddressSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('address', AddressSchema);
