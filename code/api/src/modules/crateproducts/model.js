'use strict'

module.exports = function(sequelize, DataTypes) {
  let CrateProducts = sequelize.define('CrateProducts', {
    productId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  })

  Crate.associate = function(models) {
    Crate.hasMany(models.Subscription)
    Crate.belongsToMany(models.Products, {
      through: 'CrateProducts',
      as: 'products',
      foreignKey: 'CrateId'
    });
  }

  return CrateProducts
}
