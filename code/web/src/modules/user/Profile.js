// Imports
import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

// UI Imports
import { Grid, GridCell } from "../../ui/grid";
import { H3, H4 } from "../../ui/typography";
import Button from "../../ui/button";
import { grey, grey2 } from "../../ui/common/colors";
import { Input } from "../../ui/input";

// App Imports
import userRoutes from "../../setup/routes/user";
import { updateUser, logout } from "./api/actions";

// Component
class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
			user: {
        id: this.props.user.details.id,
				name: this.props.user.details.name,
				email: this.props.user.details.email,
				address: this.props.user.details.address,
				bio: this.props.user.details.bio,
				// "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat",
				image: this.props.user.details.image,
				// "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png",
				availabilityDate: this.props.user.details.availabilityDate,
			},
		};
	}

	onEdit = (event) => {
    event.preventDefault();
    if(this.state.isEditing) {
      updateUser(this.state.user)
      // .then(response => {
      //   if (this.props.user.error && this.props.user.error.length > 0) {
      //     this.props.messageShow(this.props.user.error)

      //     window.setTimeout(() => {
      //       this.props.messageHide()
      //     }, 5000)
      //   } else {
      //     this.props.messageHide()
      //   }
      // })
      // .catch(error => {
      //   this.props.messageShow(this.props.user.error)

      //   window.setTimeout(() => {
      //     this.props.messageHide()
      //   }, 5000)
      // })
    }
		this.setState({
			isEditing: !this.state.isEditing
		});
	};

	onChange = (event) => {
		let user = this.state.user;
		user[event.target.name] = event.target.value;
		this.setState({
			user,
		});
	};

	render() {
		const props = this.props;
		return (
			<div>
				{/* SEO */}
				<Helmet>
					<title>My Profile - Crate</title>
				</Helmet>

				{/* Top title bar */}
				<Grid style={{ backgroundColor: grey }}>
					<GridCell style={{ padding: "2em", textAlign: "center" }}>
						<H3 font="secondary">My profile</H3>
					</GridCell>
				</Grid>

				<Grid>
					<GridCell style={{ padding: "2em", textAlign: "center" }}>
						<H4 style={{ marginBottom: "0.5em" }}>{props.user.details.name}</H4>
						{this.state.isEditing ? (
							<Button onClick={this.onEdit} theme="primary">
								Submit
							</Button>
						) : (
							<Button onClick={this.onEdit} theme="primary">Edit</Button>
						)}
						<section className="upper-info">
							{this.state.isEditing ? (
								<Input
									type="text"
									placeholder="enter an image URL"
									required="required"
									name="image"
									value={this.state.user.image}
									onChange={this.onChange}
									style={{ marginTop: "1em" }}
								/>
							) : (
								<img
									src={this.state.user.image}
									style={{ height: 100, width: 100 }}
								/>
							)}
							{this.state.isEditing ? (
								<Input
									type="text"
									placeholder={this.state.user.bio}
									required="required"
									name="bio"
									value={this.state.user.bio}
									onChange={this.onChange}
									style={{ marginTop: "1em" }}
								/>
							) : (
								<p style={{ color: grey2, marginBottom: "2em" }}>
									Bio: {this.state.user.bio}
								</p>
							)}
						</section>
            <section className='lower-info'>
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

						<Button
							theme="secondary"
							onClick={props.logout}
							style={{ marginLeft: "1em" }}
						>
							Logout
						</Button>
					</GridCell>
				</Grid>
			</div>
		);
	}
}

  
// Component Properties
Profile.propTypes = {
	user: PropTypes.object.isRequired,
	logout: PropTypes.func.isRequired,
};

// Component State
function profileState(state) {
	return {
		user: state.user,
	};
}

export default connect(profileState, { logout })(Profile);
