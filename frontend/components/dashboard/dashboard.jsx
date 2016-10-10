import React from 'react';
import {Link, hashHistory} from 'react-router';

export default class Dashboard extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestUser(this.props.id);
  }

  componentWillReceiveProps(newProps){
    this.props.requestUser(newProps.id);
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
        <li key={key}>
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
            <li  key={`${user.id}-order-${order.id}`}>
              <div className="left-side-user-gig">
                <h3 className="user-gig-title">{order.title}</h3>
                <img className="user-gig-img" src={order.photo_url} />
              </div>
              <div className="right-side-user-gig">
                <h3 className="description-header">Deliver to:</h3>
                <p className="user-gig-description">{order.email}</p>
              </div>
            </li>
      )}}else {
        for(let key in user.sells){
          total_sales += 1;
        };
        orders_array.push(
          <li className="empty">
            <h3 className="user-gig-title">Private</h3>
          </li>
        )
      };
      var img={
        backgroundImage: 'url(' + 'https://static.pexels.com/photos/185576/pexels-photo-185576.jpeg' + ')'
      }

    const toRender = [
      <div className="dashboard" style={img}>
        <img src={user.photo_url} className="profile-pic" />
        <h1 className="username">{`Hi, I'm ${user.username}!`}</h1>
        <div className="stats">
          <div className="stats-container">
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
      <div className="user-dashboard">
        {toRender}
        <div className="profile-info">
            <div className="user-description">
            <h2 className="user-description-header">Description:</h2>
              <p>{user.description}</p>
          </div>
        </div>
        <div className="users-gigs">
          <div id="gigs-index">
          <ul className="users-gigs-list">
          <h2 className="users-gigs-header">Gigs:</h2>
            {gigs_array}
          </ul>
          </div>
        </div>
        <div className="users-orders">
          <h2 className="users-orders-header">Orders</h2>
          <ul className="users-orders-list">
            {orders_array}
          </ul>
        </div>
      </div>
    );
  }

}
