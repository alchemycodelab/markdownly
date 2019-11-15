import React from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';
import styles from './Tabs.css';

const Tabs = ({ tabs, changeTabs, deleteTab }) => {
  const tabElements = tabs.map((tab, i) => {
    return (
      <li key={i}>
        <Tab title={tab} changeTabs={changeTabs} deleteTab={deleteTab} />
      </li>
    );
  });
  return (
    <ul className={styles.Tabs}>
      {tabElements}
    </ul>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string),
  changeTabs: PropTypes.func,
  deleteTab: PropTypes.func
};

export default Tabs;
