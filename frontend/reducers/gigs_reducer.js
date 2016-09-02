import { GigsConstants } from './../actions/gigs_actions';
import merge from 'lodash/merge';

const GigsReducer = function(state = {}, action){
  switch(action.type){
    case GigsConstants.RECEIVE_GIGS:
      return merge({}, state, action.gigs)
    case GigsConstants.RECEIVE_SINGLE_GIG:
      return merge({}, state, {[action.gig.id]: action.gig});
    default:
      return state;
  }
};



export default GigsReducer;
