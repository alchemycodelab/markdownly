export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const updateMarkdown = (markdown) => ({
  type: UPDATE_MARKDOWN,
  payload: markdown
});

export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const setActiveTab = (num) => ({
  type: SET_ACTIVE_TAB,
  payload: num
});

export const DELETE_TAB = 'DELETE_TAB';
export const deleteTab = (num) => ({
  type: DELETE_TAB,
  payload: num
});

export const ADD_TAB = 'ADD_TAB';
export const addTab = () => ({
  type: ADD_TAB
});
