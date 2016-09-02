import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import GigsReducer from './gigs_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  gigs: GigsReducer
});

export default RootReducer;
