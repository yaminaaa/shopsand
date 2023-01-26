const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

class Brand extends Model {}

Brand.init({
  name: {
    type: DataTypes.TEXT,
    allowNull: false
  },
}, {
  sequelize,
  tableName: 'brand',
});

module.exports = Brand;
