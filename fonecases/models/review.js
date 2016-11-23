var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
    
var ReviewSchema = new mongoose.Schema({
  pid: ObjectId,
  pname: String,
  pslug: String,
  reviewer: String, // Required as we are not joining with the User table
  email: String, // Required as we are not joining with the User table
  message: String,
  rating: Number,
  active: { type: Boolean, default: true },
  created: {type: Date, default: Date.now}
});

ReviewSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('review', ReviewSchema);