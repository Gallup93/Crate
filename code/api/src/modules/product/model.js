'use strict'

// Product
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
    Product.belongsToMany(models.Crates, {
      through: 'CrateProducts',
      as: 'crates',
      foreignKey: 'productId'
    })
  }

  // return Product
}
