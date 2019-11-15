import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getFiles } from '../selectors/headerSelectors';
import { addFile, deleteTabs } from '../actions/headerActions';
import Form from '../components/form/Form';
import Tabs from '../components/tabs/Tabs';
import { switchTabs } from '../actions/documentActions';

const Header = ({ tabs, handleSubmit, changeTabs, deleteTab }) => {
  return (
    <>
      <h1>Markdown Editor</h1>
      <Form handleSubmit={handleSubmit}/>
      <Tabs tabs={tabs} changeTabs={changeTabs} deleteTab={deleteTab} />
    </>
  );
};

Header.propTypes = {
  tabs: PropTypes.array,
  handleClick: PropTypes.func,
  title: PropTypes.string.isRequired,
  handleChange: PropTypes.func,
  handleSubmit: PropTypes.func,
  markdown: PropTypes.string, 
  changeTabs: PropTypes.func,
  deleteTab: PropTypes.func
};

const mapStateToProps = state => ({
  tabs: getFiles(state)
});

const mapDispatchToProps = dispatch => ({
  handleSubmit(title) {
    dispatch(addFile(title));
  },
  changeTabs(title) {
    dispatch(switchTabs(title));
  },
  deleteTab(title) {
    dispatch(deleteTabs(title));
  }
}); 

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
