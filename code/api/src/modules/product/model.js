'use strict'

// Product
// Add new attributes here for user profile page improvemnts
// Add a boolean 'returned' property to products with default set to false
module.exports = function(sequelize, DataTypes) {
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
  })
}

// Create relationship between a Crate and Product.
// New association 'belongsTo(models.Crate)'