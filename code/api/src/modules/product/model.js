'use strict'

// Product
// Add new attributes here for user profile page improvemnts (see issue #35)
// Add 'returned'(boolean) to products with default set to false
module.exports = function(sequelize, DataTypes) {
  // let Product =
  return sequelize.define('products', {
    name: {
      type: DataTypes.STRING
    },
    slug: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    },
    type: {
      type: DataTypes.INTEGER
    },
    gender: {
      type: DataTypes.INTEGER
    },
    image: {
      type: DataTypes.TEXT
    }
    // returned: {
    //   type: DataTypes.TEXT, default 'False'
    // }
  })
  Product.associate = function(models) {
    Product.hasMany(models.CrateProducts)
  }

  return Product
}
