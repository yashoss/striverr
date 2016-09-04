
import { connect } from 'react-redux';
import NewGigForm from './new_gig_form';
import { createGig } from '../../actions/gigs_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});

const mapDispatchToProps = dispatch => ({
  createGig: gig => dispatch(createGig(gig))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewGigForm);
