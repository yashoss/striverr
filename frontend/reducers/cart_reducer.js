import {GigsConstants} from "../actions/gigs_actions";
import {OrderConstants} from "../actions/order_actions";
import merge from 'lodash/merge';

const CartReducer = function(state = {}, action){
  switch(action.type){
    case GigsConstants.RECEIVE_CART_ITEMS:
      return merge({}, state, action.cartItems);
    case GigsConstants.REPLACE_CART_ITEMS:
      return action.cartItems;
    case OrderConstants.RECEIVE_ORDERS:
      return {};
    default:
      return state;
    }
  };

export default CartReducer;
