var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;
var CategorySchema = new mongoose.Schema({
  name: String,
  category: Number,
  parent: { type: ObjectId, ref: 'Category' },
  child: [{ type: ObjectId, ref: 'Category' }],
  active: {type: Boolean, default: true},
  uid: String,
  img: String,
  top: Boolean,
  updated: {type: Date, default: Date.now},
  slug: String,
  products: []
});

CategorySchema.plugin(mongoosePaginate);

module.exports = mongoose.model('category', CategorySchema);
