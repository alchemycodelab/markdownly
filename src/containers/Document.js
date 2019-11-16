import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { updateMarkdown } from '../actions/editorActions';
import { getActiveMarkdown } from '../selector/markdownSelector';

// eslint-disable-next-line react/prop-types
const Document = () => {
  const dispatch = useDispatch();
  const handleMarkdownChange = ({ target }) => dispatch(updateMarkdown(target.value));
  const activeMarkdown = useSelector(getActiveMarkdown);

  return (
    <>
      <div className={styles.Document}>
        <Editor
          activeMarkdown={activeMarkdown}
          handleMarkdownChange={handleMarkdownChange}
        />
        <Preview
          activeMarkdown={activeMarkdown}
        />
      </div>
    </>
  );
};

export default Document;
