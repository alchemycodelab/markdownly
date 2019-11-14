import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import TabList from '../components/markdown/TabList';
import { setActiveTab } from '../actions/editorActions';

// eslint-disable-next-line react/prop-types
const Tabs = ({ active, list, handleTabClick }) => {
  return (
    <TabList list={list} active={active} handleTabClick={handleTabClick} />
  );
};

const mapStateToProps = state => ({
  active: state.editor.active,
  list: state.editor.list
});

const mapDispatchToProps = dispatch => ({
  handleTabClick(num) {
    dispatch(setActiveTab(num));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Tabs);
// Document.propTypes = {
//   markdown: PropTypes.string.isRequired,
//   handleMarkdownChange: PropTypes.func.isRequired
// };

// const mapDispatchToProps = dispatch => ({
//   handleMarkdownChange({ target }) {
//     dispatch(updateMarkdown(target.value));
//   }
// });

// const mapStateToProps = state => ({
//   markdown: state.markdown
// });

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Document);

