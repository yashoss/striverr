import React from 'react';
import {Link, hashHistory} from 'react-router';
import Modal from 'react-modal';
import GigShowContainer from '../gigs/gigs_show_container';
import ReviewFormContainer from '../reviews/review_form_container';

export default class Dashboard extends React.Component{

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state={
      key: -1,
      modal: false,
      style:{
        overlay : {
          position        : 'fixed',
          top             : 0,
          left            : 0,
          right           : 0,
          bottom          : 0,
          backgroundColor : 'rgba(255, 255, 255, 0.75)',
          zIndex          : 999,
          transition      : "all 1s ease"
        },
        content : {
          margin          : 'auto',
          width           : "865px",
          height          : "68%",
          border          : '1px solid #ccc',
          padding         : '10px',
          backgroundColor : 'rgba(156, 174, 190, 0.79)',
          overflowY       : 'hidden'

        }
      }
    };

  }

  openModal(key){
    this.setState({modal: true, key: key});
    $("html, body").css('overflowY', 'hidden');
  }

  closeModal(){
    this.setState({modal: false});
    $("html, body").css('overflowY', 'initial')
  }

  handleClick(id){
    hashHistory.push(`/gigs/${id}`);
  }

  componentDidMount(){
    $("html, body").css('overflowY', 'initial');
    this.props.requestUser(this.props.id);
  }

  removeGig(id){
    this.props.removeGig(id);
  }

  render(){
    const user = this.props.user;
    let gig_views = 0;
    const gigs_array = [];
    let userLinks;
    let rating = 0;
    let reviews_count = 0;
    let score = 0;
    for(let key in user.gigs){
      let gig = user.gigs[key];
      gig_views += gig.gig_views;
      for(let id in gig.reviews){
        reviews_count++;
        rating += gig.reviews[id].rating;
      }
      if (reviews_count > 0){
        score = rating / reviews_count;
        score /= 5;
      }

      if(this.props.currentUser && this.props.currentUser.id === user.id){
        userLinks = () => (
          <div className="user-gig-links">
            <Link to={`/gigs/${gig.id}/edit`} activeClassName="edit-gig">Edit</Link>
            <a href={window.location.href=window.location.href} onClick={this.removeGig.bind(this, gig.id)} className="remove-gig">Delete</a>
          </div>
        );
      }else{
        userLinks = () => (
          <div className="user-gig-links">
          </div>
        );
      };
      gigs_array.push(
        <li key={key} onClick={this.openModal.bind(this, key)}>
        <div className="holder">
        <div className="image" id="image-show">

        <img src={gig.photo_url} />
        <p className="title-index">
          {gig.title}
        </p>
        {userLinks()}
        <p className="index-price">
          Price: ${gig.price}
        </p>
        </div>
        </div>
        </li>
      );
    };
    if (reviews_count > 0){
      rating /= (reviews_count * 5);
    }

    let total_sales = 0;
    const orders_array = [];
    if(this.props.currentUser && this.props.currentUser.id === user.id){
      for(let key in user.sells){
        let order = user.sells[key];
        total_sales += 1;
          orders_array.push(
            <li  key={`${user.id}-order-${key}`}>
              <div key="left-user" className="left-side-user-gig">
                <h3 className="user-gig-title">{order.title}</h3>
                <img className="user-gig-img" src={order.photo_url} />
              </div>
              <div key="right-user" className="right-side-user-gig">
                <h3 className="description-header">Deliver to:</h3>
                <p className="user-gig-description">{order.email}</p>
              </div>
            </li>
      )}}else {
        for(let key in user.sells){
          total_sales += 1;
        };
        orders_array.push(
          <li key="orders" className="empty">
            <h3 className="user-gig-title">Private</h3>
          </li>
        )
      };
      var img={
        backgroundImage: 'url(' + 'https://static.pexels.com/photos/185576/pexels-photo-185576.jpeg' + ')'
      }

    const toRender = [
      <div key="dashboard" className="dashboard" style={img}>
        <img src={user.photo_url} className="profile-pic" />
        <h1 className="username">{`Hi, I'm ${user.username}!`}</h1>
        <div key="stats" className="stats">
          <div key="stats" className="stats-container">
            <span className="user-orders">
              <h3 className="orders-header">Orders</h3>
              <h4 className="orders-stats">{total_sales}</h4>
            </span>
            <span className="users-gig-views">
              <h3 className="gig-views-header">Gig Views</h3>
              <h4 className="gig-views">{gig_views}</h4>
            </span>
            <span className="users-profile-views">
              <h3 className="profile-views-header">Profile Views</h3>
              <h4 className="profile-views">{user.profile_views}</h4>
            </span>
          </div>
        </div>
      </div>

    ]
    return(
      <div key="user-dash" className="user-dashboard">
        {toRender}
        <div key="profile-info" className="profile-info">
            <div key="user description" className="user-description">
            <h2 className="user-description-header">Description:</h2>
              <p>{user.description}</p>
          </div>
          <div key="orders" className="users-orders">
            <h2 className="users-orders-header">Orders</h2>
            <ul className="users-orders-list">
              {orders_array}
            </ul>
          </div>
        </div>
        <div key="users-gigs" className="users-gigs">
          <div key="gigs-index" id="gigs-index">
          <ul className="users-gigs-list">
          <h2 className="users-gigs-header">Gigs:</h2>
            {gigs_array}
          </ul>
          <Modal isOpen={this.state.modal} onRequestClose={this.closeModal.bind(this)}  style={this.state.style}>
            <div key="close" className="close-button">
              <h1 className="close" onClick={this.closeModal.bind(this)}>X</h1>
            </div>
            <GigShowContainer id={this.state.key}/>
          </Modal>
          </div>
        </div>
      </div>
    );
  }

}
