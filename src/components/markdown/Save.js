import React from 'react';
import styles from './Save.css';
import PropTypes from 'prop-types';

const Save = ({ handleSave }) => {
  return (
    <button onClick={handleSave} className={styles.Save}>Save</button>
  );
};

Save.propTypes = {
  handleSave: PropTypes.func.isRequired
};

export default Save;
