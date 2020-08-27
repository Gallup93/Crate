import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import { GraphQLSchema } from 'graphql'
import schema from '../../setup/schema'

describe('crateproduct model queries', () => {
  let server;

  beforeAll(()=> {
    server = express();

    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false,
      })
    )
  })

  it('returns all crateproducts', async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ crateproducts { productId crateId } }'})
      .expect(200)
    expect(response.body.data.users.length).toEqual(2)
  })
  // it('returns all crates', async () => {
  //   const response = await request(server)
  //     .get('/')
  //     .send({ query: '{ user(id: 2) { email name } }'})
  //     .expect(200)
  //
  //   expect(response.body.data.user.name).toEqual('The User')
  // })

})
