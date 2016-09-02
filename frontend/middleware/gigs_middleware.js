import {GigsConstants, receiveGigs, receiveSingleGig} from '../actions/gigs_actions';
import {fetchGigs, fetchSingleGig} from '../util/gigs_api_util';

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
    default:
      return next(action);
  }
}

export default GigsMiddleware;
