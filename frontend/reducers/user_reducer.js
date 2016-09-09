import {UserConstants} from './../actions/user_actions';
import {GigsConstants} from './../actions/gigs_actions';
import merge from 'lodash/merge';

const UserReducer = function(state={}, action){
  switch(action.type){
    case UserConstants.RECEIVE_USER:
      return merge({}, action.user);
    case GigsConstants.REPLACE_GIGS:
      let user = { gigs: action.gigs};
      return merge({}, state, user);
    default:
      return state;
  }
};


export default UserReducer;
