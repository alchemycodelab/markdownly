import React from 'react';
import { useDispatch } from 'react-redux';

import LandingPage from '../components/LandingPage';

import { leaveLandingPage } from '../actions/documentActions';

export default function LandingPageContainer() {
  const dispatch = useDispatch();
  const handleEnter = () => dispatch(leaveLandingPage());
  return <LandingPage handleEnter={handleEnter}/>;
}


// const mapDispatchToProps = dispatch => ({
//   handleEnter() {
//     dispatch(leaveLandingPage());
//   }
// });

// const LandingPageContainer = connect(
//   null,
//   mapDispatchToProps
// )(LandingPage);

// export default LandingPageContainer;
