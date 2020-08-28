import React from "react";
import PropTypes from "prop-types";

class UserDetails extends React.Component {
	constructor(props) {
    super(props)
	}
	render() {
		return (
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
						<img src={this.props.user.image} style={{ height: "30vh" }} />
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
							{this.props.user.bio}
						</p>
					</section>
				</section>
				<section className="lower-info">
					<p style={{ color: grey2, marginBottom: "2em" }}>
						Email: {this.props.user.email}
					</p>
					<p style={{ color: grey2, marginBottom: "2em" }}>
						Availability Date: {this.props.user.availabilityDate}
					</p>
					<p style={{ color: grey2, marginBottom: "2em" }}>
						Shipping Address: {this.props.user.address}
					</p>
				</section>
			</section>
		);
	}
}

// Component Properties
UserDetails.propTypes = {
	type: PropTypes.string,
	disabled: PropTypes.bool,
	theme: PropTypes.string,
};

export default UserDetails;
