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

  it('Updates a users address', async () => {

    const admin = await request(server)
      .get('/')
      .send({ query: '{ user(id: 1) { id name email address bio image availabilityDate }}' })
      .expect(200)

    var adminId = admin.body.data.user.id
    var adminAddress = admin.body.data.user.address
    console.log(admin.body)

    const response = await request(server)
      .post('/admin/user/update')
      .send({ query: 'mutation { userUpdate(id: 1, address: "457 plz work") { id address } }' })
      .set('Accept', 'application/json')
      .expect(200)

    console.log(response.body)

    expect(response.body.data.userUpdate.id).toEqual(adminId)
    expect(response.body.data.userUpdate.address).not.toEqual(adminAddress)
    expect(response.body.data.userUpdate.address).toEqual('457 plz work')
  })

  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})
