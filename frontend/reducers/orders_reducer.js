import {OrderConstants} from "../actions/order_actions";
import merge from 'lodash/merge';

const OrdersReducer = function(state = {}, action){
  switch(action.type){
    case OrderConstants.RECEIVE_ORDERS:
      return merge({}, state, action.orders);
    default:
      return state;
  };
};
