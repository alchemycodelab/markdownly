import { UPDATE_MARKDOWN, updateMarkdown, SET_ACTIVE_TAB, setActiveTab } from './editorActions';

describe('editor actions', () => {
  it('updates markdown', () => {
    const markdown = 'stuff';
    expect(updateMarkdown(markdown)).toEqual({
      type: UPDATE_MARKDOWN,
      payload: 'stuff'
    });
  });
  
  it('sets Active Tab', () => {
    const number = 8;
    expect(setActiveTab(number)).toEqual({
      type: SET_ACTIVE_TAB,
      payload: 8
    });
  });
});
