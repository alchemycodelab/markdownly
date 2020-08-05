import React from 'react';
import PropTypes from 'prop-types';
import styles from './Editor.css';

const Editor = ({ markdown, updateMarkdown }) => (
  <textarea className={styles.Editor} value={markdown} onChange={updateMarkdown} />
);

Editor.propTypes = {
  markdown: PropTypes.string.isRequired,
  updateMarkdown: PropTypes.func.isRequired
};

export default Editor;
