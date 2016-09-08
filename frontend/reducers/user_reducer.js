import {UserConstants} from './../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = function(state={}, action){
  switch(action.type){
    case UserConstants.RECEIVE_USER:
      return merge({}, state, action.user)
    default:
      return state;
  }
};


export default UserReducer;
