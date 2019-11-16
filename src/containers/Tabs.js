import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';
import TabList from '../components/markdown/TabList';
import { setActiveTab, deleteTab, addTab } from '../actions/editorActions';
import { getMarkdownArray, getActiveIndex } from '../selector/markdownSelector';

// eslint-disable-next-line react/prop-types
const Tabs = () => {
  const dispatch = useDispatch();
  const handleTabClick = (num) => dispatch(setActiveTab(num));
  const handleTabClose = (num) => dispatch(deleteTab(num));
  const handleAddTab = () => dispatch(addTab());
  const activeIndex = useSelector(getActiveIndex);
  const list = useSelector(getMarkdownArray);

  return (
    <TabList list={list} activeIndex={activeIndex} handleTabClick={handleTabClick} handleTabClose={handleTabClose} handleAddTab={handleAddTab}/>
  );
};

export default Tabs;
