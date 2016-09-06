import {connect} from 'react-redux';
import {requestSingleGig, addCartItem} from '../../actions/gigs_actions';
import GigShow from './gig_show';

const mapDispatchToProps = dispatch => ({
  requestSingleGig: id => dispatch(requestSingleGig(id)),
  addCartItem: (cartItem, success) => dispatch(addCartItem(cartItem, success))
})

const mapStateToProps = (state, ownProps)  => ({
  currentUser: state.session.currentUser,
  gig: state.gigs[ownProps.id],
  id: ownProps.id
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GigShow);
