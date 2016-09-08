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
    const success = () => {hashHistory.push(`/users/${this.props.currentUser.id}`)};
    this.props.removeGig(id, success);
  }

  render(){
    const user = this.props.user;
    let gig_views = 0;
    const gigs_array = [];
    let userLinks;
    for(let key in user.gigs){
      let gig = user.gigs[key];
      gig_views += gig.gig_views;
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
          <li key={`${user.id}-gig-${gig.id}`}>
            <div className="left-side-user-gig">
              <h3 className="user-gig-title">{gig.title}</h3>
              <img className="user-gig-img" src={gig.photo_url} />
            </div>
            <div className="right-side-user-gig">
              <h3 className="description-header">Description</h3>
              <p className="user-gig-description">{gig.description}</p>
            </div>
            {userLinks()}
          </li>
      );
    };
    const toRender = [
      <div className="dashboard">
        <h1 className="username">{user.username}</h1>
        <img src={user.photo_url} className="profile-pic" />
        <div className="profile-info">
        <div className="stats">
            <h2 className="stats-header">Statistics</h2>
              <div className="stats-container">
                <span className="user-orders">
                  <h3 className="orders-header">Orders</h3>
                  <h4 className="orders-stats">TBD</h4>
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
            <div className="user-description">
            <h2 className="user-description-header">Description:</h2>
              <p>{user.description}</p>
          </div>
        </div>
      </div>
    ]
    return(
      <div className="user-dashboard">
        {toRender}
        <div className="users-gigs">
          <h2 className="users-gigs-header">Gigs</h2>
          <ul className="users-gigs-list">
            {gigs_array}
          </ul>
        </div>
      </div>
    );
  }

}
