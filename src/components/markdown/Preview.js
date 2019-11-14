import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';

function Preview({ activeMarkdown }) {
  const __html = marked(activeMarkdown);
  return <div className={`${styles['markdown-body']} ${styles.Preview}`} dangerouslySetInnerHTML={{ __html }}></div>;
}

Preview.propTypes = {
  activeMarkdown: PropTypes.string.isRequired
};

export default Preview;
