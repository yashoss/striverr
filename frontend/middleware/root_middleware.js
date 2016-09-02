
import { applyMiddleware } from 'redux';
import SessionMiddleware from '../middleware/session_middleware';
import GigsMiddleware from './gigs_middleware'
const RootMiddleware = applyMiddleware(
  SessionMiddleware,
  GigsMiddleware
);

export default RootMiddleware;
