import React from 'react';
import { Link, hashHistory } from 'react-router';
import Modal from 'react-modal';
import SessionFormContainer from '../session_form/session_form_container';
import FontAwesome from 'react-fontawesome';

const sessionLinks = () => (
  <nav key="login-signup" className="login-signup">
    <ul>
      <li key="loginbutton" onClick={Greeting.openModal.bind(this, "/login")} className="current">Login</li>
      <li key="signupbutton" onClick={Greeting.openModal.bind(this, "/signup")} className="current">Sign up!</li>
      <li key="guestlogin" onClick={Greeting.openModal.bind(this, "/guest")} className="current">Guest Login!</li>
    </ul>
  </nav>
);

const personalGreeting = (currentUser, logout, goToUser) => (
	<hgroup key="hgroup" className="header-group">
  <div key="hname" onClick={goToUser.bind(null, currentUser.id)}><h2 className="header-name">Hi, {currentUser.username}!</h2></div>
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
          background      : 'url("http://www.mediamavenandmore.com/wp-content/uploads/2016/10/huffington-post-blog-submission-guidelines-1200x800.jpg")',
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
        <hgroup key="hgroup2" className="header-group">
        <div key="hname2" onClick={goToUser.bind(null, this.props.currentUser.id)}><h2 className="header-name">Hi, {this.props.currentUser.username}!</h2></div>
        <Link key="linknew" to="/gigs/new" activeClassName="post">Post new gig!</Link>
        <Link key="carts" to={`/carts/${this.props.currentUser.id}`} activeClassName="cart"><FontAwesome name='shopping-cart' className='cart-icon' />Cart</Link>
        <a key="getout" href="" className="logout" onClick={this.props.logout.bind(this)}>Log Out</a>
        </hgroup>
      )

    } else {
      this.show.push(
        <nav key="login-signup2" className="login-signup">
          <ul key="session">
            <li key="loginbutton2" id="login" onClick={this.loginHeight.bind(this, "/login")} className="current">Login</li>
            <li key="signupbutton2" id="signup" onClick={this.signupHeight.bind(this, "/signup")} className="current">Sign up!</li>
            <li key="guestlogin2" id="guest" onClick={this.loginHeight.bind(this, "/guest")} className="current">Guest Login!</li>
          </ul>
        </nav>
      )
    }

    return(
      <div key="greetings">
        {this.show}
        <Modal key="modal" isOpen={this.state.modal} onRequestClose={this.closeModal.bind(this)}  style={this.state.style}>
          <SessionFormContainer formType={this.state.formType} closeModal={this.closeModal.bind(this)}/>
        </Modal>
      </div>

    )
  }

}

// export default Greeting;
