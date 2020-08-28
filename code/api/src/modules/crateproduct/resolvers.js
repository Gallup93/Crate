// App Imports
import models from '../../setup/models'

// Get subscription by ID
export async function get(parentValue, { id }) {
  return await models.CrateProduct.findOne({
    where: { id },
    include: [
      { model: models.Product, as: 'product' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Get subscription by user
export async function getByCrate(parentValue, {}, { auth }) {
  // makes a getByUser function available for use
  if(auth.user && auth.user.id > 0) {
    return await models.CrateProduct.findAll({
      where: {
        userId: auth.user.id
      },
      include: [
        {model: models.Product, as: 'product'},
        {model: models.Crate, as: 'crate'},
      ]
    })
  } else {
    throw new Error('Please login to view your products.')
  }
}

// Get all  crateProducts
export async function getAll() {
  return await models.CrateProduct.findAll({
    include: [
      { model: models.Product, as: 'product' },
      { model: models.Crate, as: 'crate' },
    ]
  })
}

// Create crateProducts
export async function create(parentValue, { crateId }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.CrateProduct.create({
      crateId,
      userId: auth.user.id
    })
  } else {
    throw new Error('Please login to subscribe to this crates products.')
  }
}

// Delete crateProducts
export async function remove(parentValue, { id }, { auth }) {
  if(auth.user && auth.user.id > 0) {
    return await models.CrateProduct.destroy({where: {id, userId: auth.user.id}})
  } else {
    throw new Error('Access denied.')
  }
}
