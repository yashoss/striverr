import React from 'react';

export default class CartsIndex extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestCartItems(this.props.id);
  }

  render(){
    this.cartItems = this.props.cartItems;
    return(
      <div>Your cart</div>
    )
  }

}
