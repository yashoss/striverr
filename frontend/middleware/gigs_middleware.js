import {GigsConstants, receiveGigs, receiveSingleGig} from '../actions/gigs_actions';
import {fetchGigs, fetchSingleGig, createGig, addCartItem} from '../util/gigs_api_util';

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
    default:
      return next(action);
  }
}

export default GigsMiddleware;
