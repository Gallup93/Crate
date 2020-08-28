// mutations are used for altering data. Inserting, updating, deleting data.
// they are similar to resolvers but differ in that they alter data

// Imports
import { GraphQLString, GraphQLInt } from 'graphql'

// App Imports
import { UserType } from './types'
import { create, remove, update } from './resolvers'

// Create
// Add new attributes here for user profile page improvemnts (see issue #35)
// [image_link(GraphQLString), description(GraphQLString), shipping_address(GraphQLString),
// (something to track availability date(s?) for receiving orders)]
export const userSignup = {
  type: UserType,
  args: {
    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    password: {
      name: 'password',
      type: GraphQLString
    }
  },
  resolve: create
}

//Update
export const userUpdate = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    },

    name: {
      name: 'name',
      type: GraphQLString
    },

    email: {
      name: 'email',
      type: GraphQLString
    },

    address: {
      name: 'address',
      type: GraphQLString
    },

    image: {
      name: 'image',
      type: GraphQLString
    },

    bio: {
      name: 'bio',
      type: GraphQLString
    },

    availabilityDate: {
      name: 'availabilityDate',
      type: GraphQLString
    }
  },
  resolve: update
}

// Remove
// delete a user by id
export const userRemove = {
  type: UserType,
  args: {
    id: {
      name: 'id',
      type: GraphQLInt
    }
  },
  resolve: remove
}
