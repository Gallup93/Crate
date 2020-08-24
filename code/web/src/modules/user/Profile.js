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
import Input from '../../ui/input/Input'
// import penAndPaper from './penAndPaper.svg'

// App Imports
import userRoutes from '../../setup/routes/user'
import { logout } from './api/actions'

// Component
class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEditing: false,
      user: {
        name: this.props.user.details.name,
        email: this.props.user.details.email,
        address: null,
        bio: null,
        image: null,
        availabilityDate: null
      }
    }
  }

  onChange = (event) => {
    let user = this.state.user
    user[event.target.name] = event.target.value

    this.setState({
      user
    })
  }

  showOrHideForm = (event) => {
    event.preventDefault 
    this.setState({isEditing: !this.state.isEditing})
  }

  render() {
    return (
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

        <Grid>
          <GridCell style={{ padding: '2em', textAlign: 'center' }}>
            <H4 style={{ marginBottom: '0.5em' }}>{this.props.user.details.name}</H4>
            <section className='lower-info'>
            {!this.state.isEditing ? <Button theme='primary' onClick={e => this.showOrHideForm(e)}>Edit</Button> : <Button theme='primary' onClick={e => this.showOrHideForm(e)}>Submit</Button>}
            {this.state.isEditing ? 
              <Input
                type="email"
                fullWidth={true}
                placeholder="Email"
                required="required"
                name="email"
                value={this.state.user.email}
                onChange={this.onChange}
                style={{ marginTop: '1em' }}
              /> : 
              <p style={{ color: grey2, marginBottom: '2em' }}>
                Email: {this.state.user.email}
              </p>
            }
            {this.state.isEditing ? 
              <Input 
                type="email"
                fullWidth={true}
                placeholder="Availability Date"
                required="required"
                name="availabilityDate"
                value={this.state.user.availabilityDate}
                onChange={this.onChange}
                style={{ marginTop: '1em' }}
              /> : 
              <p style={{ color: grey2, marginBottom: '2em' }}>
                Availability Date: {this.state.user.availabilityDate}
              </p>
            }
            {this.state.isEditing ? 
              <Input 
                type="email"
                fullWidth={true}
                placeholder="Address"
                required="required"
                name="address"
                value={this.state.user.address}
                onChange={this.onChange}
                style={{ marginTop: '1em' }}
              /> : 
              <p style={{ color: grey2, marginBottom: '2em' }}>
                Shipping Address: {this.state.user.address}
              </p> 
            }
            </section>

            <Link to={userRoutes.subscriptions.path}>
              <Button theme="primary">Subscriptions</Button>
            </Link>

            <Button theme="secondary" onClick={this.props.logout} style={{ marginLeft: '1em' }}>Logout</Button>
          </GridCell>
        </Grid>
      </div>
    )
  }
}
// Component Properties
Profile.propTypes = {
  user: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

// Component State
function profileState(state) {
  return {
    user: state.user
  }
}

export default connect(profileState, { logout })(Profile)
