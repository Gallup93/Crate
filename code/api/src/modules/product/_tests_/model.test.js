import request from 'supertest'
import express from 'express'
import graphqlHTTP from 'express-graphql'
import schema from '../../../setup/schema'

describe('product model', () => {
  let server;

  beforeAll(() => {
    server = express();

    server.use(
      '/',
      graphqlHTTP({
        schema: schema,
        graphiql: false
      }),
    )
  })

  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})
