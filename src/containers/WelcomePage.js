import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { signup, login } from '../actions';
import WelcomePage from '../components/WelcomePage';

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.services.error.auth,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  signup,
  login,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WelcomePage);
