// Imports
import { GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import CrateProductType from './types'
import { getAll, getByUser, get } from './resolvers'

// Subscriptions All
export const crateProducts = {
  type: new GraphQLList(CrateProductType),
  resolve: getAll
}

// Subscriptions by user
export const crateProductsByUser = {
  type: new GraphQLList(CrateProductType),
  resolve: getByUser
}

// Subscription By id
export const crateProduct = {
  type: CrateProductType,
  args: {
    id: { type: GraphQLInt }
  },
  resolve: get
}
