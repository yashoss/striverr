import {combineReducers} from 'redux';
import SessionReducer from './session_reducer';
import GigsReducer from './gigs_reducer';
import CartReducer from './cart_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  gigs: GigsReducer,
  cartItems: CartReducer
});

export default RootReducer;
