import {GigsConstants, receiveGigs} from '../actions/gigs_actions';
import {fetchGigs} from '../util/gigs_api_util';

const GigsMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case GigsConstants.REQUEST_GIGS:
      const success = data => dispatch(receiveGigs(data));
      fetchGigs(success);
      return next(action);
    default:
      return next(action);
  }
}

export default GigsMiddleware;
