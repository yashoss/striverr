import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';

const sessionLinks = () => (
  <nav className="login-signup">
    <ul>
      <li onClick={Greeting.openModal.bind(this, "/login")} className="current">Login</li>
      <li onClick={Greeting.openModal.bind(this, "/signup")} className="current">Sign up!</li>
      <li onClick={Greeting.openModal.bind(this, "/guest")} className="current">Guest Login!</li>
    </ul>
  </nav>
);

const personalGreeting = (currentUser, logout, goToUser) => (
	<hgroup className="header-group">
  <div onClick={goToUser.bind(null, currentUser.id)}><h2 className="header-name">Hi, {currentUser.username}!</h2></div>
    <Link to="/gigs/new" activeClassName="current">Post new gig!</Link>
    <Link to={`/carts/${currentUser.id}`} activeClassName="current">Cart</Link>
		<a href="" className="logout" onClick={logout}>Log Out</a>
	</hgroup>
);

const goToUser = (id) => {
  hashHistory.push(`/users/${id}`);
};

export default class Greeting extends React.Component{

  constructor(props, {currentUser}){
    super(props);

    this.show = [];

    this.state={
      key: -1,
      modal: false,
      style:{
        overlay : {
          position        : 'fixed',
          top             : 80,
          left            : 0,
          right           : 0,
          bottom          : 0,
          backgroundColor : 'rgba(255, 255, 255, 0.75)',
          zIndex          : 999,
          transition      : "all 1s ease"
        },
        content : {
          margin          : 'auto',
          width           : '600px',
          height          : '450px',
          border          : '1px solid #ccc',
          padding         : '20px',
          backgroundColor : 'rgba(156, 174, 190, 0.79)',
          background      : 'url("https://static.pexels.com/photos/87063/pexels-photo-87063.jpeg")',
          opacity         : '0.95',
          backgroundSize  : 'cover'

        }
      }
    };

  }

  openModal(key){
    this.setState({formType: key})
    this.setState({modal: true});
  }

  closeModal(){
    this.setState({modal: false});
  }

  goToUser(id){
    hashHistory.push(`/users/${id}`);
  };

  componentWillReceiveProps(){
    this.closeModal();
    $(".login-signup").hide();
  }

  signupHeight(path){
    this.state.style.content.height = "500px";
    this.openModal(path);
  }

  loginHeight(path){
    this.state.style.content.height = "450px";
    this.openModal(path);
  }

  render(){
    if (this.props.currentUser){
      this.show.push(
        <hgroup className="header-group">
        <div onClick={goToUser.bind(null, this.props.currentUser.id)}><h2 className="header-name">Hi, {this.props.currentUser.username}!</h2></div>
        <Link to="/gigs/new" activeClassName="post">Post new gig!</Link>
        <Link to={`/carts/${this.props.currentUser.id}`} activeClassName="cart">Cart</Link>
        <a href="" className="logout" onClick={this.props.logout.bind(this)}>Log Out</a>
        </hgroup>
      )

    } else {
      this.show.push(
        <nav className="login-signup">
          <ul>
            <li id="login" onClick={this.loginHeight.bind(this, "/login")} className="current">Login</li>
            <li id="signup" onClick={this.signupHeight.bind(this, "/signup")} className="current">Sign up!</li>
            <li id="guest" onClick={this.loginHeight.bind(this, "/guest")} className="current">Guest Login!</li>
          </ul>
        </nav>
      )
    }

    return(
      <div>
        {this.show}
        <Modal isOpen={this.state.modal} onRequestClose={this.closeModal.bind(this)}  style={this.state.style}>
          <SessionFormContainer formType={this.state.formType} closeModal={this.closeModal.bind(this)}/>
        </Modal>
      </div>

    )
  }

}

// export default Greeting;
