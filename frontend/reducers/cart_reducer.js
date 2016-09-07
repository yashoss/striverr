import {GigsConstants} from "../actions/gigs_actions";
import merge from 'lodash/merge';

const CartReducer = function(state = {}, action){
  switch(action.type){
    case GigsConstants.RECEIVE_CART_ITEMS:
      return merge({}, state, action.cartItems);
    case GigsConstants.REPLACE_CART_ITEMS:
      return action.cartItems;
    default:
      return state;
    }
  };

export default CartReducer;
