var mongoose = require("mongoose"),
    Schema = mongoose.Schema;

var CompanySchema = new Schema({
  name: { type: String, required: true },
  products : [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});
var ProductSchema = Schema({
  _company: { type: Number, ref: 'Company' },
  name: { type: String },
});

var Company = mongoose.model("Company", CompanySchema);
var Product = mongoose.model("Product", ProductSchema);

module.exports = Company;
module.exports = Product;
