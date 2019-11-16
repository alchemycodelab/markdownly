import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Save from '../components/markdown/Save';
import { saveMarkdown } from '../actions/pageActions';

// eslint-disable-next-line react/prop-types
const SaveContainer = () => {
  const dispatch = useDispatch();
  const handleSave = (markdown) => dispatch(saveMarkdown(markdown));
  const markdown = useSelector(state => state.editor);

  return (
    <Save handleSave={() => { handleSave(markdown); }} />
  );
};

export default SaveContainer;
