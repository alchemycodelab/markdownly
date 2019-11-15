import { connect } from 'react-redux';
import LandingPage from '../components/LandingPage';
import { leaveLandingPage } from '../actions/landingPageActions';

const mapDispatchToProps = dispatch => ({
  handleEnter() {
    dispatch(leaveLandingPage());
  }
});

const LandingPageContainer = connect(
  null,
  mapDispatchToProps
)(LandingPage);

export default LandingPageContainer;
