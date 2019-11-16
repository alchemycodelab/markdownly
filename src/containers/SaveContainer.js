import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Save from '../components/markdown/Save';
import { saveMarkdown } from '../actions/pageActions';

export default function SaveContainer() {
  const dispatch = useDispatch();
  const handleSave = markdown => dispatch(saveMarkdown(markdown));
  const markdown = useSelector(saveMarkdown);

  // eslint-disable-next-line react/prop-types
  return (
    <Save handleSave={() => { handleSave(markdown); }} />
  );
}
