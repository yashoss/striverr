import { GigsConstants } from './../actions/gigs_actions';
import {ReviewConstants} from './../actions/review_actions';

import merge from 'lodash/merge';

const GigsReducer = function(state = {}, action){
  switch(action.type){
    case GigsConstants.RECEIVE_GIGS:
      return merge({}, state, action.gigs)
    case GigsConstants.RECEIVE_SINGLE_GIG:
      return merge({}, state, {[action.gig.id]: action.gig});
    case ReviewConstants.RECEIVE_SINGLE_REVIEW:
      let review ={
        [action.review.gig_id]: {
          reviews: {
            [action.review.id]: action.review
          }
        }
      };
      return merge({}, state, review);
    case GigsConstants.REPLACE_GIGS:
      return action.gigs
    default:
      return state;
  }
};



export default GigsReducer;
