import { connect } from 'react-redux';
import App from '../components/App';
import { getLandingPage } from '../selectors/landingPageSelectors';

const mapStateToProps = state => ({
  landingPage: getLandingPage(state)
});

const AppContainer = connect(
  mapStateToProps
)(App);

export default AppContainer;
