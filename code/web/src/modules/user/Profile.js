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
import { logout } from "./api/actions";

// Component
class Profile extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isEditing: false,
			user: {
				name: this.props.user.details.name,
				email: this.props.user.details.email,
				address: "",
				bio:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis, sapien dui mattis dui, non pulvinar lorem felis nec erat",
				image:
					"https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png",
				availabilityDate: "",
			},
		};
	}

	onEdit = (event) => {
		event.preventDefault();
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
						<H4 style={{ marginBottom: "0.5em" }}>{props.user.details.name}</H4>
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
									<input
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
										}}
									/>
									<p style={{ color: grey2, marginBottom: "2em" }}>
										Bio 
									</p>
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
								<p style={{ color: grey2, marginBottom: "2em" }}>
										Image URL
								</p>
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
								<p style={{ color: grey2, marginBottom: "2em" }}>
										Email 
								</p>
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
									<p style={{ color: grey2, marginBottom: "2em" }}>
										Address 
									</p>
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
											style={{ height: "30vh" }}
										/>
									</section>
									<section
										className="bio"
										style={{
											display: "flex",
											flexDirection: "row",
											alignItems: "left",
											height: "20vh",
											width: "40vw",
										}}
									>
										<p style={{ color: grey2, marginBottom: "2em" }}>
											<p
												style={{
													display: "flex",
													marginBottom: ".5em",
													fontSize: "x-large",
												}}
											>
												Bio:
											</p>
											{this.state.user.bio}
										</p>
									</section>
								</section>
								<section className="lower-info">
									<p style={{ color: grey2, marginBottom: "2em" }}>
										Email: {this.state.user.email}
									</p>
									<p style={{ color: grey2, marginBottom: "2em" }}>
										Availability Date: {this.state.user.availabilityDate}
									</p>
									<p style={{ color: grey2, marginBottom: "2em" }}>
										Shipping Address: {this.state.user.address}
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

export default connect(profileState, { logout })(Profile);
