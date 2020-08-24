import request from 'supertest'
import express from 'express'
import schema from '../../setup/schema'

describe('user queries', () => {
  let server;

  beforeAll(()=> {
    server = express();

    server.user(
      '/',
      graphqlHTTP({
        schema: MyGraphQLSchema,
        graphiql: false,
      })
    )
  })

  it('returns all users', async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ users { email name } }'})
      .expect(200)

    expect(response.body.data.users.length).toEqual(2)
  })
  it('returns user by id', async () => {
    const response = await request(server)
      .get('/')
      .send({ query: '{ user(id: 2) { email name } }'})
      .expect(200)

    expect(response.body.data.user.name).toEqual(' \')
  })
  it('is true', () => {
    expect(true).toBe(true)
  })
})
