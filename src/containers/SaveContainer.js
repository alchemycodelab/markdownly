import React from 'react';
import { connect } from 'react-redux';
import Save from '../components/markdown/Save';
import { saveMarkdown } from '../actions/pageActions';

// eslint-disable-next-line react/prop-types
const SaveContainer = ({ handleSave, markdown }) => {
  return (
    <Save handleSave={() => { handleSave(markdown); }} />
  );
};

const mapDispatchToProps = dispatch => ({
  handleSave(markdown) {
    dispatch(saveMarkdown(markdown));
  }
});

const mapStateToProps = state => ({
  markdown: state.editor
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SaveContainer);
