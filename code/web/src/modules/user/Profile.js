// Imports
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'

// UI Imports
import { Grid, GridCell } from '../../ui/grid'
import { H3, H4 } from '../../ui/typography'
import Button from '../../ui/button'
import { grey, grey2 } from '../../ui/common/colors'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

//We will most likely need to add some sort of functionality to this component
//that operates in a similar way to the Login component's form.
//We may also consider adding a new component called UserData or something
//that can be updated with new user data. 

// Component
const Profile = (props) => (
  <div>
    {/* SEO */}
    <Helmet>
      <title>My Profile - Crate</title>
    </Helmet>

    {/* Top title bar */}
    <Grid style={{ backgroundColor: grey }}>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H3 font="secondary">My profile</H3>
      </GridCell>
    </Grid>
    {/* The Grid component below is where our user's bio, address, and image will be contained */}
    {/* This is also where will will need to put out 'edit' buttons and connect them with functions 
    that update that part of the user object in state*/}
    <Grid>
      <GridCell style={{ padding: '2em', textAlign: 'center' }}>
        <H4 style={{ marginBottom: '0.5em' }}>{props.user.details.name}</H4>
        {/* <img style={blahblahblah}/>{props.user.details.image}</> */}
        <p style={{ color: grey2, marginBottom: '2em' }}>{props.user.details.email}</p>
        {/* <p style={blahblahblah}/>{props.user.details.bio}</p> */}
        {/* <p style={blahblahblah}/>{props.user.details.address}</p> */}
        <Link to={userRoutes.subscriptions.path}>
        {/* userRoutes contains the information for the browser to relate the url to what is rendered on the page */}
        {/* if we want to direct the user to any part of the website, the Link above is a good template */}
          <Button theme="primary">Subscriptions</Button>
        </Link>
        <Button theme="secondary" onClick={props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
      </GridCell>
    </Grid>
  </div>
)

// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
// This is basically dispatchStateToProps, which is what is used to connect this component to the global store.
function profileState(state) {
  return {
    user: state.user
  }
}

// This is connecting the Profile component to props and also the logout function that was imported from actions?
export default connect(profileState, { logout })(Profile)
