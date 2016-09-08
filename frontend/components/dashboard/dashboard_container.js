import {connect} from 'react-redux';
import {requestUser} from '../../actions/user_actions';
import Dashboard from './dashboard';

const mapDispatchToProps = dispatch => ({
  requestUser: id => dispatch(requestUser(id))
});

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  user: state.user,
  id: ownProps.params.id
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
