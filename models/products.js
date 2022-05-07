'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Products.init({
    product_id: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull:false
    },
    description: {
      type: DataTypes.STRING,
      allowNull:false
    },
    product_type: {
      type: DataTypes.STRING,
      allowNull:false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    image_one: {
      type: DataTypes.STRING,
      allowNull:true
    },
    image_two: {
      type: DataTypes.STRING,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'Products',
    tableName: "products",
    timestamps: false
  });
  return Products;
};