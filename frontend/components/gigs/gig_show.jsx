import React from 'react';

export default class GigShow extends React.Component{

  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.requestSingleGig(this.props.id)
  }

  render(){
    const gig = this.props.gig;
    if(!gig){
      return(
        <h1>loading</h1>
      )
    }else{
      return(
            <div className="gig-show-container">
              <h1 className="gig-title">{gig.title}</h1>
              <div className="gig-pic">
                <h3>{gig.category}</h3>
                <img src={gig.photo_url}/>
              </div>
              <div className="gig-price-info">
                <ul>
                  <li className="gig-show-price">${gig.price}</li>
                  <li key="gig-show-dt">Delivery time: {gig.delivery_time} days</li>
                  <li key="gig-show-revisions">upto: {gig.revisions} revisions</li>
                  <li key="gig-show-description"><h3>Description:</h3><p>{gig.description}</p></li>
                </ul>
                <button type="button" className="purchase-button">Place Order</button>
              </div>
              <div className="gig-user-info">{gig.user.username}</div>
            </div>
      )}
  };
}
