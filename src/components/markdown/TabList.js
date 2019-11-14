import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

const TabList = ({ active, list, handleTabClick }) => {

  return (
    <div>
      {list.map((item, idx) => (
        <button
          key={item}
          type="radio"
          onClick={handleTabClick}
          className={active === idx ? styles.active : styles.tabButton} >
          {`tab ${idx}`}
        </button>
      ))}
      <button className={styles.addTab} type="radio">+</button>
    </div>
  );
};

TabList.propTypes = {
  active: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  handleTabClick: PropTypes.func.isRequired
};

export default TabList;
// const TabList = ({ list }) => {

//   return (
//     <div>
//       <button className={styles.active} type="radio">tab 1</button>
//       <button className={styles.tabButton} type="radio">tab 2</button>
//       <button className={styles.tabButton} type="radio">tab 3</button>
//       <button className={styles.addTab} type="radio">+</button>
//     </div>
//   );

// };
// TabCard.propTypes = {

// };

