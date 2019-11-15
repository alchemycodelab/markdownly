import React from 'react';
import Preview from '../components/markdown/Preview';
import Editor from '../components/markdown/Editor';
import styles from './Document.css';
import { useSelector, useDispatch } from 'react-redux';
import { getMarkdown } from '../selectors/documentSelectors';


const Document = () => {
  const markdown = useSelector(getMarkdown);
  const dispatch = useDispatch();
  const updateMarkdown = ({ target }) => dispatch(updateMarkdown(target.value));;
  return (
    <>
      <div className={styles.Document}>
        <Editor markdown={markdown} updateMarkdown={updateMarkdown} />
        <Preview markdown={markdown} />
      </div>
    </>
  );
};

export default Document;
