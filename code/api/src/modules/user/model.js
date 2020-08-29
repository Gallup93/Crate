'use strict'

// User
// Add new attributes here for user profile page improvemnts (see issue #35)
// [image_link(string), description(string), shipping_address(string),
// (something to track availability date(s?) for receiving orders)]
module.exports = function(sequelize, DataTypes) {
  let User = sequelize.define('users', {
    name: {
      type: DataTypes.STRING
    },
    email: {
      type: DataTypes.TEXT
    },
    password: {
      type: DataTypes.TEXT
    },
    address: {
      type: DataTypes.TEXT
    },
    bio: {
      type: DataTypes.TEXT
    },
    image: {
      type: DataTypes.TEXT
    },
    availabilityDate: {
      type: DataTypes.TEXT
    },
    role: {
      type: DataTypes.TEXT
    }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }

  return User
}
