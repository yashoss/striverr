import React from 'react';

export default class CartsIndex extends React.Component{

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.requestCartItems(this.props.user_id);
  }

  render(){
    const cartItems = this.props.cartItems;
    debugger;
  
    return(
      <div>Your cart</div>
    )
  }

}
