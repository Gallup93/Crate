// resolvers are used for fetching data from the API, they are nethods that
// we define. they do not alter data, just say how to retrieve it
// Imports
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// App Imports
import serverConfig from '../../config/server'
import params from '../../config/params'
import models from '../../setup/models'

// Create
// Add new attributes here for user profile page improvemnts (see issue #35)
// [image_link, description, shipping_address,
// (something to track availability date(s?) for receiving orders)]
export async function create(parentValue, { name, email, password }) {
  // root resolver
  // Users exists with same email check
  const user = await models.User.findOne({ where: { email } })
  //looks for user by entered email
  if (!user) {
    // User does not exists
    const passwordHashed = await bcrypt.hash(password, serverConfig.saltRounds)
    //create password with password input
    return await models.User.create({
      name,
      email,
      password: passwordHashed
    })
    //creates a user with name, email and password input
  } else {
    // User exists
    throw new Error(`The email ${ email } is already registered. Please try to login.`)

  }
}


  // update
  export async function update(parentValue, { id, name, email, address, image, bio, availabilityDate}) {
  await models.User.update(
    {
      name,
      email,
      address,
      image,
      bio,
      availabilityDate
    },
    { where: { id } }
  );
  return getById(parentValue, { id })
}

  // login
  export async function login(parentValue, { email, password }) {
  const user = await models.User.findOne({ where: { email } })
  //find user by email
  if (!user) {
    // User does not exists
    throw new Error(`We do not have any user registered with ${ email } email address. Please signup.`)
  } else {
    const userDetails = user.get()
    // User exists
    // if user does exist decrypt entered password
    const passwordMatch = await bcrypt.compare(password, userDetails.password)

    if (!passwordMatch) {
      // Incorrect password
      throw new Error(`Sorry, the password you entered is incorrect. Please try again.`)
    } else {
      const userDetailsToken = {
        id: userDetails.id,
        name: userDetails.name,
        email: userDetails.email,
        role: userDetails.role
      }
      // sets user details to current user

      return {
        user: userDetails,
        token: jwt.sign(userDetailsToken, serverConfig.secret)
      }
    }
  }
}

// Get by ID
export async function getById(parentValue, { id }) {
  //getByID is a fetching method, API method. fetches data
  return await models.User.findOne({ where: { id } })
}

// Get all
export async function getAll() {
  return await models.User.findAll()
}

// Delete
export async function remove(parentValue, { id }) {
  return await models.User.destroy({ where: { id } })
  // deletes user by id
}

// User genders
export async function getGenders() {
  return Object.values(params.user.gender)
  // checks passed through user params for the gender
}
