import {connect} from 'react-redux';
import {requestSingleGig, editGig} from '../../actions/gigs_actions';
import EditGigForm from './edit_gig';

const mapDispatchToProps = dispatch => ({
  requestSingleGig: (id) => dispatch(requestSingleGig(id)),
  editGig: (gig, id) => dispatch(editGig(gig, id))
});

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  id: ownProps.params.id,
  gig: state.gigs[ownProps.params.id]
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditGigForm);
