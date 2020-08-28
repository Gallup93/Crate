// Imports
import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { ProductType } from '../product/types'
import CrateType from '../crate/types'

// crateproduct type
const CrateProductType = new GraphQLObjectType({
  name: 'crateproduct',
  description: 'CrateProduct Type',

  fields: () => ({
    id: { type: GraphQLInt },
    product: { type: ProductType },
    crate: { type: CrateType },
    createdAt: { type: GraphQLString },
    updatedAt: { type: GraphQLString }
  })
})
// crateproduct type attribute
export default CrateProductType
