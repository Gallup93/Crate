'use strict'

module.exports = function(sequelize, DataTypes) {
  let Crate = sequelize.define('crates', {
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.TEXT
    }
  })

  // Add new association 'hasMany(models.Product)'
  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
    Crate.hasMany(models.CrateProducts)
    // Crate.hasMany(models.Product)
    // Crate.hasMany(models.User).through(models.Subscription)
    // js many to many relationship with 'joins table' equivalent
//     Users.belongsToMany(models.Groups, {
//   through: 'GroupUsers',
//   as: 'groups',
//   foreignKey: 'userId'
// });
  }

  return Crate
}
