import { connect } from 'react-redux';
import ReviewForm from './review_form';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  id: ownProps.id,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
