import React from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import styles from 'github-markdown-css/github-markdown.css';

function Preview({ markdown }) {
  const __html = marked(markdown[0]);
  return <div className={`${styles['markdown-body']} ${styles.Preview}`} dangerouslySetInnerHTML={{ __html }}></div>;
}

Preview.propTypes = {
  markdown: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};

export default Preview;
