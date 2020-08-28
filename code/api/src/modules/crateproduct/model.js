'use strict'

module.exports = function(sequelize, DataTypes) {
  let CrateProduct = sequelize.define('crateproducts', {
    productId: {
      type: DataTypes.INTEGER
    },
    crateId: {
      type: DataTypes.INTEGER
    }
  })

  CrateProduct.associate = function(models) {
    CrateProduct.belongsTo(models.Product)
    CrateProduct.belongsTo(models.Crate)
  }

  return CrateProduct
}
