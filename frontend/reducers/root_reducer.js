import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import GigsReducer from './gigs_reducer';
import CartReducer from './cart_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  gigs: GigsReducer,
  cartItems: CartReducer,
  user: UserReducer
});

export default RootReducer;
