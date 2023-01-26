const Product = require('./product');
const Brand = require('./brand');

Product.belongsTo(Brand, {
  as: 'brand',
  foreignKey: 'brand_id',
});
Brand.hasMany(Product, {
  as: 'products',
  foreignKey: 'brand_id',
});

module.exports = {
  Product,
  Brand,
}