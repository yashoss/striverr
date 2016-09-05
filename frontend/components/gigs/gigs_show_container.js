import {connect} from 'react-redux';
import {requestSingleGig} from '../../actions/gigs_actions';
import GigShow from './gig_show';

const mapDispatchToProps = dispatch => ({
  requestSingleGig: id => dispatch(requestSingleGig(id))
})

const mapStateToProps = (state, ownProps)  => ({
  gig: state.gigs[ownProps.id],
  id: ownProps.id
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GigShow);
