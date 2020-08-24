'use strict'

// User
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
    role: {
      type: DataTypes.TEXT
    }
    // picture: {
    //   type: DataTypes.IMAGE?LINK?
    // }
    // address: {
    //   type: DataTypes.TEXT
    // }
  })

  User.associate = function(models) {
    User.hasMany(models.Subscription)
  }
// has a one to many relationship
//will add another relationship
// has many creates
// has many products through crates
  return User
}
