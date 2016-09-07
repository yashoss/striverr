import React from 'react';
import { Link } from 'react-router';

export default class CartsIndex extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestCartItems(this.props.user_id);
  }


  removeCartItem(id){
    this.props.removeCartItem(id);
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
          <p className="cart-description">Description: {item.description}</p>
          <div className="cart-detial-options">
            <span className="rev">Revisions: {item.revisions}</span>
            <span className="delivery_time">Delivery Time: {item.delivery_time}</span>
            <a href={window.location.href=window.location.href} onClick={this.removeCartItem.bind(this, key)} className="remove-cart">Remove</a>
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
                  <button type="button" className="checkout">
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
