import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TabList from '../components/markdown/TabList';
import { setActiveTab, deleteTab, addTab } from '../actions/editorActions';
import { getMarkdownArray, getActiveIndex } from '../selector/markdownSelector';

export default function Tabs() {
  const dispatch = useDispatch();
  const handleTabClick = num => dispatch(setActiveTab(num));
  const handleTabClose = num => dispatch(deleteTab(num));
  const handleAddTab = () => dispatch(addTab());
  const list = useSelector(getMarkdownArray);
  const activeIndex = useSelector(getActiveIndex);

  return (
    <TabList list={list} activeIndex={activeIndex} handleTabClick={handleTabClick} handleTabClose={handleTabClose} handleAddTab={handleAddTab} />
  );
}
