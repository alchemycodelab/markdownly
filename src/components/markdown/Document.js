import React from 'react';
import Preview from './Preview';
import Editor from './Editor';
import styles from './Document.css';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { TabBar } from './TabBar';
import { getMarkdown, getEditTitle, getFiles, getFocus } from '../../selectors/markdownSelectors';
import { updateMarkdown, changeFile, newTab, deleteTab, changeTitle, toggleEdit } from '../../actions/markdownActions';

export default function Document() {

  const markdown = useSelector(state => getMarkdown(state));
  const files = useSelector(state => getFiles(state));
  const focus = useSelector(state => getFocus(state));
  const editTitle = useSelector(state => getEditTitle(state));

  const dispatch = useDispatch();
  const changeMarkdown = ({ target }) => dispatch(updateMarkdown(target.value));
  const handleClick = ({ currentTarget }) => dispatch(changeFile(currentTarget.id));
  const handleAdd = () => dispatch(newTab());
  const handleDelete = (id) => dispatch(deleteTab(id));
  const handleTitle = ({ target }) => dispatch(changeTitle(target.value, target.id));
  const handleTitleEdit = (id) => dispatch(toggleEdit(id));

  return (
    <>
      <div className={styles.Document}>
        <TabBar files={files}
          editTitle={editTitle}
          handleClick={handleClick}
          handleTitle={handleTitle}
          handleAdd={() => handleAdd()}
          handleDelete={handleDelete}
          handleTitleEdit={handleTitleEdit}
        />
        <div style={{ 'display': 'flex' }}>
          <Editor markdown={markdown} updateMarkdown={changeMarkdown} />
          <Preview markdown={markdown} />
        </div>
      </div>
    </>
  );
}

Document.propTypes = {
  markdown: PropTypes.string,
  changeMarkdown: PropTypes.func,
  files: PropTypes.array,
  handleAdd: PropTypes.func,
  handleClick: PropTypes.func,
  handleDelete: PropTypes.func,
  focus: PropTypes.string,
  handleTitle: PropTypes.func,
  editTitle: PropTypes.shape({
    editInput: PropTypes.bool,
    id: PropTypes.string
  }),
  handleTitleEdit: PropTypes.func
};
