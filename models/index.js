// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category),
  // Categories have many Products
  Category.belongsToMany(Product),
  // Products belongToMany Tags (through ProductTag)
  Product.belongsToMany(ProductTag, {
    through: {
      model: Tag,
      unique: false,
    }}

  ),
  // Tags belongToMany Products (through ProductTag)
  Tag.belongsToMany(ProductTag, {
    through:  {
      model: Product,
      unique: false,
    }
  }
    ),

  module.exports = {
    Product,
    Category,
    Tag,
    ProductTag,
  };
