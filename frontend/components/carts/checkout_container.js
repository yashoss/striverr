import {connect} from 'react-redux';
import Checkout from './checkout';

const mapStateToProps = (state, ownProps) => ({
  orders: state.orders
});

export default connect(
  mapStateToProps
)(Checkout);
