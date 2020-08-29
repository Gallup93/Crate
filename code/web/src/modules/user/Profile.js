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
				image: this.props.user.details.image,
				availabilityDate: this.props.user.details.availabilityDate,
			},
		};
	}

	onEdit = (event) => {
    // event.preventDefault();
    if(this.state.isEditing) {
      this.props.updateUser(this.state.user)
    }
		this.setState({
      isEditing: !this.state.isEditing,
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
					<GridCell
						style={{
							padding: "2em",
							textAlign: "center",
							display: "flex",
							flexDirection: "row",
							justifyContent: "space-between",
						}}
					>
						<H3 font="secondary">My profile</H3>
						{this.state.isEditing ? (
							<section>
								{/* <Button onClick={this.onEdit} theme="primary">
									Submit
								</Button> */}
							</section>
						) : (
							<section>
								<Button onClick={this.onEdit} theme="primary">
									Edit
								</Button>
							</section>
						)}
					</GridCell>
				</Grid>
				<Grid>
					<GridCell style={{ padding: "2em", textAlign: "center" }}>
						<H4 style={{ marginBottom: "0.5em" , fontSize: "12px + 1.8vw"}}>{props.user.details.name}</H4>
						{this.state.isEditing ? (
							<section
								className="inputs"
								style={{
									marginTop: "1em",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									height: "100%",
									fontFamily: "Roboto, sans-serif",
								}}
							>
								<section className="bio">
									<textarea
										type="textarea"
										placeholder={this.state.user.bio}
										required="required"
										name="bio"
										value={this.state.user.bio}
										onChange={this.onChange}
										style={{
											marginTop: "1em",
											width: "50vw",
                      height: "20vh",
                      fontFamily: "Roboto, sans-serif"
										}}
									/>
									<p style={{ color: grey2, marginBottom: "2em" }}>Bio</p>
								</section>
								<section className="image">
									<Input
										type="text"
										placeholder="enter an image URL"
										required="required"
										name="image"
										value={this.state.user.image}
										onChange={this.onChange}
										style={{
											marginTop: "1em",
											width: "50vw",
										}}
									/>
									<p style={{ color: grey2, marginBottom: "2em" }}>Image URL</p>
								</section>
								<section className="email">
									<Input
										type="email"
										fullWidth={true}
										placeholder="Email"
										required="required"
										name="email"
										value={this.state.user.email}
										onChange={this.onChange}
										style={{
											marginTop: "1em",
											width: "50vw",
										}}
									/>
									<p style={{ color: grey2, marginBottom: "2em" }}>Email</p>
								</section>
								<section className="address">
									<Input
										type="text"
										fullWidth={true}
										placeholder="Address"
										required="required"
										name="address"
										value={this.state.user.address}
										onChange={this.onChange}
										style={{
											marginTop: "1em",
											width: "50vw",
										}}
									/>
									<p style={{ color: grey2, marginBottom: "2em" }}>Address</p>
								</section>
								<section>
									<Input
										type="date"
										fullWidth={true}
										placeholder="Availability Date"
										required="required"
										name="availabilityDate"
										value={this.state.user.availabilityDate}
										onChange={this.onChange}
										style={{
											marginTop: "1em",
											width: "50vw",
										}}
									/>
									<p style={{ color: grey2, marginBottom: "2em" }}>
										Availability Date
									</p>
								</section>
								<Button onClick={this.onEdit} theme="primary">
									Submit
								</Button>
							</section>
						) : (
							<section
								className="user-info"
								style={{
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
									padding: "inherit",
								}}
							>
								<section
									className="upper-info"
									style={{
										display: "flex",
										flexDirection: "row",
										alignItems: "inherit",
										justifyContent: "center",
										padding: "inherit",
									}}
								>
									<section
										className="image"
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "center",
                      height: "100%",
										}}
									>
										<img
											src={this.state.user.image}
											style={{ height: "30vh", borderRadius: "8px" }}
										/>
									</section>
                    <b style={{ fontWeight: "bold", fontSize: "22px", color: "black", marginTop: "-18vh", marginLeft: "3vw"}}>Bio: </b>
									<section
										className="bio"
										style={{
											display: "flex",
                      textAlign: "left",
                      marginLeft: "50px",
											alignItems: "left",
                      height: "20vh",
                      width: "30vw",
                      maxWidth: "30vw",
                      overflow: "none",
                      wordWrap: "break-word",
                      overflowY: "auto"
										}}
									>
										<p
											style={{
												color: grey2,
												marginBottom: "2em",
												display: "flex",
												marginBottom: ".5em",
												fontSize: "21px",
											}}
										>
											{this.state.user.bio}
										</p>
									</section>
								</section>
								<section className="lower-info">
									<p style={{ color: grey2, marginBottom: "2em", fontSize: "20px" }}>
										<b style={{ fontWeight: "bold", fontSize: "21px", color: "black"}}>Email:</b> {this.state.user.email}
									</p>
									<p style={{ color: grey2, marginBottom: "2em", fontSize: "20px" }}>
                  <b style={{ fontWeight: "bold", fontSize: "21px", color: "black"}}>Availability Date: </b>{this.state.user.availabilityDate}
									</p>
									<p style={{ color: grey2, marginBottom: "2em", fontSize: "20px" }}>
                  <b style={{ fontWeight: "bold", fontSize: "21px", color: "black"}}>Shipping Address: </b>{this.state.user.address}
									</p>
								</section>
							</section>
						)}
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

export default connect(profileState, { logout, updateUser })(Profile);
