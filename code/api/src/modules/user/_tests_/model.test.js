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

  afterEach( async () => {
    const response =  await request(server)
      .post('/')
      .send({ query: 'mutation { userUpdate(id: 1, name: "The Admin", email: "admin@crate.com", address: "admin address", bio: "admin description", image: "admin image", availabilityDate: "whenever") { id } }' })
      .set('Accept', 'application/json')
      .expect(200)
  })


  it('Updates a users email', async () => {

    const admin = await request(server)
      .get('/')
      .send({ query: '{ user(id: 1) { id name email address bio image availabilityDate }}' })
      .expect(200)

      // console.log(admin.body)

    var adminId = admin.body.data.user.id
    var adminEmail = admin.body.data.user.email

    const response = await request(server)
      .post('/admin/product/create')
      .send({ query: 'mutation { userUpdate(id: 1, email: "HipAndCool@aol.com") { id email } }' })
      .set('Accept', 'application/json')
      .expect(200)

    expect(response.body.data.userUpdate.id).toEqual(adminId)
    expect(response.body.data.userUpdate.email).not.toEqual(adminEmail)
    expect(response.body.data.userUpdate.email).toEqual('HipAndCool@aol.com')

  })

  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})
