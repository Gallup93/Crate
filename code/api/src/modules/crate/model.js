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

  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
    Crate.belongsToMany(models.Products, {
      through: 'CrateProducts',
      as: 'products',
      foreignKey: 'CrateId'
    });
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
