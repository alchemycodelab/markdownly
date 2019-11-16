import React from 'react';
import Document from '../containers/Document';
import styles from './Main.css';

export default function App() {
  return (
    <>
      <h1 className={styles.Header}><span>M</span>arkdo<span className={styles.doubleu}>w</span>n <span>E</span>ditor</h1>
      <Document className={styles.Main}/>
    </>
  );
}
