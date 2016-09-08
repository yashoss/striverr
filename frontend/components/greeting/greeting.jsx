import React from 'react';
import { Link, hashHistory } from 'react-router';

const sessionLinks = () => (
  <nav className="login-signup">
    <Link to="/login" activeClassName="current">Login</Link>
    &nbsp;or&nbsp;
    <Link to="/signup" activeClassName="current">Sign up!</Link>
    &nbsp;or&nbsp;
    <Link to="/guest" activeClassName="current">Guest Login!</Link>
  </nav>
);

const personalGreeting = (currentUser, logout, goToUser) => (
	<hgroup className="header-group">
    <Link to="/gigs/new" activeClassName="current">Post new gig!</Link>
    <Link to={`/carts/${currentUser.id}`} activeClassName="current">Cart</Link>
		<a href="" onClick={goToUser.bind(null, currentUser.id)}><h2 className="header-name">Hi, {currentUser.username}!</h2></a>
		<a href="" className="logout" onClick={logout}>Log Out</a>
	</hgroup>
);

const goToUser = (id) => {
  hashHistory.push(`/users/${id}`);
};

function Greeting({currentUser, logout}){
  if (currentUser){
    return personalGreeting(currentUser, logout, goToUser);
  } else {
    return sessionLinks();
  }
}

export default Greeting;
