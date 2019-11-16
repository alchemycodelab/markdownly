import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';
import Tabs from '../../containers/Tabs';
import SaveContainer from '../../containers/SaveContainer';

function Editor({ activeMarkdown, handleMarkdownChange }) {
  return (
    <section className={styles.Editor}>
      <Tabs />
      <textarea value={activeMarkdown} onChange={handleMarkdownChange} />
      <SaveContainer />
    </section>
  );
}

Editor.propTypes = {
  activeMarkdown: PropTypes.string.isRequired,
  handleMarkdownChange: PropTypes.func.isRequired
};

export default Editor;
