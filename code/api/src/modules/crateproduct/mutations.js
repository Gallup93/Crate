// Imports
import { GraphQLInt } from 'graphql'

// App Imports
import CrateProductsType from './types'
import { create, remove } from './resolvers'

// CrateProducts create
export const crateProductsCreate = {
  type: CrateProduct,
  args: {
    crateId: {
      name: 'crateId',
      type: GraphQLInt
    }
  },
  resolve: create
}

// CrateProduct remove
export const crateProductsRemove = {
  type: CrateProduct,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
