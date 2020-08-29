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
    var adminName = admin.body.data.user.name
    var adminEmail = admin.body.data.user.email
    var adminAddress = admin.body.data.user.address
    var adminBio = admin.body.data.user.bio
    var adminImage = admin.body.data.user.image
    var adminAvailabilityDate = admin.body.data.user.availabilityDate

    console.log(admin.body)

    const response = await request(server)
      .post('/admin/user/update')
      .send({ query: 'mutation { userUpdate(id: 1, name: "Admin Supreme", email: "YoungAndHip@aol.com", address: "457 plz work ave", bio: "admin things", image: "admin-stuff.jpg", availabilityDate: "now") { id name email address bio image availabilityDate  } }' })
      .set('Accept', 'application/json')
      .expect(200)

    console.log(response.body)

    expect(response.body.data.userUpdate.id).toEqual(adminId)

    expect(response.body.data.userUpdate.name).toEqual('Admin Supreme')
    expect(response.body.data.userUpdate.email).toEqual('YoungAndHip@aol.com')
    expect(response.body.data.userUpdate.address).toEqual('457 plz work ave')
    expect(response.body.data.userUpdate.bio).toEqual('admin things')
    expect(response.body.data.userUpdate.image).toEqual('admin-stuff.jpg')
    expect(response.body.data.userUpdate.availabilityDate).toEqual('now')
  })

  it('should test that true === true', () => {
    expect(true).toBe(true)
  })
})
