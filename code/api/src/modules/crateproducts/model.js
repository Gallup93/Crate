'use strict'

module.exports = function(sequelize, DataTypes) {
  let CrateProducts = sequelize.define('crateproducts', {
    productId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  })

  // CrateProducts.associate = function(models) {
  //   CrateProducts.hasMany(models.Subscription)
  //   CrateProducts.belongsToMany(models.Products, {
  //     through: 'crateproducts',
  //     as: 'products',
  //     foreignKey: 'CrateId'
  //   });
  // }
  // return CrateProducts
  CrateProducts.associate = function(models) {
    CrateProducts.belongsTo(models.Product)
    CrateProducts.belongsTo(models.Crate)
  }

  return CrateProducts
}
