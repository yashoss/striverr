import React from 'react';
import { Link, hashHistory } from 'react-router';

class SessionForm extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			username: "",
			email: "",
			password: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidUpdate(){
		this.redirectIfLoggedIn();
	}

	redirectIfLoggedIn(){
		if (this.props.loggedIn){
			hashHistory.push("/");
		}
	}

	update(field){
		return e => { this.setState({[field]: e.currentTarget.value }); };
	}

	handleSubmit(e){
		e.preventDefault();
		const user = this.state;
		this.props.processForm({user});
	}

	navLink(){
		if (this.props.formType === "login") {
			return <Link to="/signup">sign up instead</Link>;
		} else {
			return <Link to="/login">log in instead</Link>;
		}
	}

	renderErrors(){
		return(
			<ul>
				{this.props.errors.map( (error, i) => (
					<li key={`error-${i}`}>
						{error}
					</li>
				))}
			</ul>
		);
	}

	render() {
		const currentRouteName = this.props.location.pathname;
		if (currentRouteName === "/signup"){
			return (
				<div className="login-form-container">
					<form onSubmit={this.handleSubmit} className="login-form-box">
						Welcome to Striverr!
						<br/>
						Please { this.props.formType } or { this.navLink() }
						{ this.renderErrors() }
						<div className="login-form">
							<br />

							<label> Username:
								<input type="text"
									value={this.state.username}
									onChange={this.update("username")}
									className="login-input" />
							</label>
							<br />

							<label> E-mail:
								<input type="text"
									value={this.state.email}
									onChange={this.update("email")}
									className="login-input"
									id="email" />
							</label>

							<br />
							<label> Password:
								<input type="password"
									value={this.state.password}
									onChange={this.update("password")}
									className="login-input" />
							</label>

							<br />
							<input type="submit" value="Submit" />
						</div>
					</form>
				</div>
			)}else {
				return(
					<div className="login-form-container">
						<form onSubmit={this.handleSubmit} className="login-form-box">
							Welcome to Striverr!
							<br/>
							Please { this.props.formType } or { this.navLink() }
							{ this.renderErrors() }
							<div className="login-form">
								<br />

								<label> Username:
									<input type="text"
										value={this.state.username}
										onChange={this.update("username")}
										className="login-input" />
								</label>

								<br />
								<label> Password:
									<input type="password"
										value={this.state.password}
										onChange={this.update("password")}
										className="login-input" />
								</label>

								<br />
								<input type="submit" value="Submit" />
							</div>
						</form>
					</div>
			)}
	}

}

export default SessionForm;
