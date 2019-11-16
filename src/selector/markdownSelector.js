export const getActiveIndex = state => state.editor.active;
export const getMarkdownArray = state => state.editor.list;

export const getActiveMarkdown = state => {
  return getMarkdownArray(state).length > 0 ? getMarkdownArray(state)[getActiveIndex(state)] : '';
};
