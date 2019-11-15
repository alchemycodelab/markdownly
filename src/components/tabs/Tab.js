import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tab.css';

const Tab = ({ title, changeTabs, deleteTab }) => {
  return (
    <div className={styles.Tab}>
      <h2 onClick={() => changeTabs(title)}>{title}</h2>
      <button onClick={() => deleteTab(title)}>🗑</button>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string,
  changeTabs: PropTypes.func,
  deleteTab: PropTypes.func
};

export default Tab;
