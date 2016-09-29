import { connect } from 'react-redux';
import Search from './search';
import {GigsConstants, requestGigsCategory} from '../../actions/gigs_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  gigs: state.gigs
});

const mapDispatchToProps = (category, dispatch) => ({
  requestGigs: dispatch(requestGigsCategory(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
