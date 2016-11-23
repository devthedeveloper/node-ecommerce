var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');
 ObjectId = Schema.Types.ObjectId;
    
var WishlistSchema = new mongoose.Schema({
  product: {_id: ObjectId, name: String, slug: String, keyFeatures: []},
  variant: {_id: ObjectId, size: String, weight: String, price: Number, mrp: Number, image: String},
  uid: ObjectId, name: String, email: String,
  created: {type: Date, default: Date.now}
});

WishlistSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('wishlist',WishlistSchema)