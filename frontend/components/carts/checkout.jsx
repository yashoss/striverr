import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class Checkout extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    let orders = this.props.orders;
    debugger;
    const orders_array=[];
    for(let key in orders){
      let item = orders[key];
      orders_array.push(
        <li key={`cart-item-${key}`}>
          <h3 className="cart-title">{item.title}</h3>
          <img className="cart-img" src={item.photo_url} />
          <p className="cart-description">Description: {item.description}</p>
          <div className="cart-detial-options">
            <span className="rev">Revisions: {item.revisions}</span>
            <span className="delivery_time">Delivery Time: {item.delivery_time}</span>
            <span className="rev"> Seller: {orders.seller}</span>
            <span className="rev"> Email: {orders.email}</span>
          </div>
        </li>
      );
    };

    return(
      <div className="cart">
        <div className="cart-item">
          <h1 className="checkout-header">
          Congratulations! Sellers have been notified of your purchase!
          </h1>
          <ul className="cart-item-list">
            {orders_array}
          </ul>
          <div className="right-side-checkout">
            <Link to="/" activeClassName="keep-shopping">Keep Shopping</Link>
          </div>
        </div>
      </div>
    );
  };

}
