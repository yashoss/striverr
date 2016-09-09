import {ReviewConstants, receiveSingleReview} from '../actions/review_actions';
import {createReview} from '../util/review_api_util';

const ReviewsMiddleware = ({getState, dispatch}) => next => action => {
  switch(action.type){
    case ReviewConstants.CREATE_REVIEW:
      const success = data => dispatch(receiveSingleReview(data));
      createReview(action.review, success);
    default:
      return next(action);
  }
}

export default ReviewsMiddleware;
