export const ADD_FILE = 'ADD_FILE';
export const DELETE_TAB = 'DELETE_TAB';

export const addFile = (title) => ({
  type: ADD_FILE,
  payload: title
});

export const deleteTabs = (title) => ({
  type: DELETE_TAB,
  payload: title
});
