import { GigsConstants } from './../actions/gigs_actions';
import merge from 'lodash/merge';

const GigsReducer = function(state = {}, action){
  switch(action.type){
    case GigsConstants.RECEIVE_GIGS:
      return merge({}, state, action.gigs)
    default:
      return state;
  }
};



export default GigsReducer;
