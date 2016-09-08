import {UserConstants, requestUser, receiveUser} from '../actions/user_actions';
import {fetchUser} from '../util/user_api_util';

const UserMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case UserConstants.REQUEST_USER:
      const gotUser = data => dispatch(receiveUser(data));
      fetchUser(action.id, gotUser);
      return next(action);
    default:
      return next(action);
  }
}

export default UserMiddleware;
