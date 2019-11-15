export const UPDATE_MARKDOWN = 'UPDATE_MARKDOWN';
export const CHANGE_TABS = 'CHANGE_TABS';

export const updateMarkdown = input => ({
  type: UPDATE_MARKDOWN,
  payload: input
});

export const switchTabs = title => ({
  type: CHANGE_TABS,
  payload: title
});
