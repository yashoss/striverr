import {GigsConstants, receiveGigs, receiveSingleGig, receiveCartItems, replaceCartItems, replaceGigs} from '../actions/gigs_actions';
import {fetchGigs, fetchSingleGig, createGig, addCartItem, fetchCartItems, removeCartItem,
   removeGig, updateGig, filterGigs, checkout} from '../util/gigs_api_util';
import {receiveOrders} from '../actions/order_actions';

const GigsMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case GigsConstants.REQUEST_GIGS:
      const success = data => dispatch(receiveGigs(data));
      fetchGigs(success);
      return next(action);
    case GigsConstants.REQUEST_SINGLE_GIG:
      const gotGig = data => dispatch(receiveSingleGig(data));
      fetchSingleGig(action.id, gotGig);
      return next(action);
    case GigsConstants.CREATE_GIG:
      const madeGig = data => dispatch(receiveSingleGig(data));
      createGig(action.gig, madeGig);
      break;
    case GigsConstants.ADD_CART_ITEM:
      addCartItem(action.cartItem, action.success);
      return next(action);
    case GigsConstants.REQUEST_CART_ITEMS:
      const gotItems = data => dispatch(receiveCartItems(data));
      fetchCartItems(action.user_id, gotItems);
      return next(action);
    case GigsConstants.REMOVE_CART_ITEM:
      const cartItems = data => dispatch(replaceCartItems(data));
      removeCartItem(action.id, cartItems);
      return next(action);
    case GigsConstants.REMOVE_GIG:
      const gigs = data => dispatch(replaceGigs(data));
      removeGig(action.id, gigs);
      return next(action);
    case GigsConstants.EDIT_GIG:
      const gigEdit = data => dispatch(receiveGigs(data));
      updateGig(action.gig, gigEdit, action.id);
      return next(action);
    case GigsConstants.REQUEST_GIGS_CATEGORY:
      const filtered = data => dispatch(replaceGigs(data));
      filterGigs(action.category, filtered);
      return next(action);
    case GigsConstants.CHECKOUT:
      const orders = data => dispatch(receiveOrders(data));
      checkout(action.id, orders);
      return next(action);
    default:
      return next(action);
  }
}

export default GigsMiddleware;
