import {connect} from 'react-redux';
import {requestGigs} from '../../actions/gigs_actions';
import GigsIndex from './gigs_index';

const mapDispatchToProps = dispatch => ({
  requestGigs: () => dispatch(requestGigs())
});

const mapStateToProps = state => ({
  gigs: state.gigs
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GigsIndex);
