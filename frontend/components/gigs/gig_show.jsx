import React from 'react';
import {withRouter, hashHistory} from 'react-router';
import ReviewFormContainer from '../reviews/review_form_container';

class GigShow extends React.Component{

  constructor(props){
    super(props);
    if(this.props.currentUser){
      this.cartItem = {
        user_id: this.props.currentUser.id,
        gig_id: this.props.id
      }
    };
  }

  componentDidMount(){
    this.props.requestSingleGig(this.props.id)
  }

  

  addToCart(e){
    e.preventDefault();
    if(this.props.currentUser){
      const success = () => {this.props.router.push(`/carts/${this.props.currentUser.id}`)}
      this.props.addCartItem(this.cartItem, success);
    }else{
      alert("please login")
    }
  }

  goToUser(id){
    hashHistory.push(`/users/${id}`);
  }

  render(){
    const gig = this.props.gig;
    if(!gig){
      return(
        <h1>loading</h1>
      )
    }else{
      const reviewsArray = [];
      for(let key in gig.reviews){
        let review = gig.reviews[key];
        reviewsArray.push(
          <li key={`review-${key}`} className="review-item">
            <div className="reviewer">
              <a href={`/#/users/${review.author_id}`} className="link-to-user">
                <p className="reviewer-username">{review.author}</p>
                <img className="reviewer-pic" src={review.pic} />
              </a>
            </div>
            <div className="review-gut">
              <span className="review-rating">rated: {review.rating}/5</span>
              <p className="review-body">{review.body}</p>
            </div>
          </li>
        )
      }
      return(
            <div className="gig-show-container">
              <h1 className="gig-title">{gig.title}</h1>
              <div className="gig-pic">
                <h3>{gig.category}</h3>
                <img src={gig.photo_url}/>
              </div>
              <div className="gig-price-info">
                <ul>
                  <li className="gig-show-price">Price: ${gig.price}</li>
                  <li className="gig-show-dt">Delivery time: {gig.delivery_time} days</li>
                  <li className="gig-show-revisions">upto: {gig.revisions} revisions</li>
                  <li className="gig-show-description"><h3>Description:</h3><p>{gig.description}</p></li>
                </ul>
                <button type="button" className="purchase-button" onClick={this.addToCart.bind(this)}>Place Order</button>
              </div>
                <div className="gig-user-info">
                <a onClick={this.goToUser.bind(this, gig.user.id)}>
                <span className="gig-username">{gig.user.username}</span>
                  <img src={gig.user.photo_url} className="gig-user-pic" />
              </a>
                  <h5 className="about-header">About me:</h5>
                  <p className="gig-user-description">{gig.user.description}</p>
                </div>
                <ReviewFormContainer id={gig.id} />
                <div className="reviews-container">
                  <ul className="reviews-list">
                    {reviewsArray}
                  </ul>
                </div>
            </div>
      )}
  };
}

export default withRouter(GigShow);
