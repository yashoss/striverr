import {connect} from 'react-redux';
import {requestCartItems, removeCartItem, checkout} from '../../actions/gigs_actions';
import CartsIndex from './carts_index';

const mapDispatchToProps = dispatch => ({
  requestCartItems: (id) => dispatch(requestCartItems(id)),
  removeCartItem: (id) => dispatch(removeCartItem(id)),
  checkout: id => dispatch(checkout(id))
});

const mapStateToProps = (state, ownProps) => ({
  cartItems: state.cartItems,
  user_id: state.session.currentUser.id
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartsIndex);
