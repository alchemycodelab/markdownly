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
