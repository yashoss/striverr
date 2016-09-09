
import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import GigsMiddleware from './gigs_middleware';
import UserMiddleware from './user_middleware';
import ReviewsMiddleware from './reviews_middleware';

const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  GigsMiddleware,
  UserMiddleware,
  ReviewsMiddleware
);

export default RootMiddleware;
