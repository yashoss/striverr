import React from 'react';
import { Link, hashHistory } from 'react-router';

export default class CartsIndex extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestCartItems(this.props.user_id);
  }


  removeCartItem(e, id){
    e.preventDefault();
    this.props.removeCartItem(id);
  }

  checkout(){
    this.props.checkout(this.props.user_id);
    hashHistory.push("/checkout");
  }


  render(){
    const cartItems = this.props.cartItems;
    const cart = [];
    let total = 0;
    for(let key in cartItems){
      let item = cartItems[key];
      total += item.price;
      cart.push(
        <li key={`cart-item-${key}`}>
          <h3 className="cart-title">{item.title}</h3>
          <img className="cart-img" src={item.photo_url} />
          <h4 className="cart-description-header">Description: </h4>
          <p className="cart-description">{item.description}</p>
          <div className="cart-detial-options">
            <span className="rev">Revisions: {item.revisions}</span>
            <span className="delivery_time">Delivery Time: {item.delivery_time}</span>
            <a href={window.location.href=window.location.href} onClick={(e) => {this.removeCartItem(e, item.id)}} className="remove-cart">Remove</a>
          </div>
        </li>
      );
    };

    return(
      <div className="cart">
        <div className="cart-item">
          <ul className="cart-item-list">
            {cart}
          </ul>
          <div className="right-side-checkout">
            <Link to="/" activeClassName="keep-shopping">Keep Shopping</Link>
            <div className="checkout-container">
              <span className="price">Total: ${total}</span>
                <section className="gradient">
                  <button type="button" onClick={this.checkout.bind(this, this.props.cartItems)} className="checkout">
                    Checkout
                  </button>
                </section>
            </div>
          </div>
        </div>
      </div>
    )
  };

}
