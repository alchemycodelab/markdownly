import { UPDATE_MARKDOWN, updateMarkdown } from './documentActions';

describe('Document Action', () => {
  it('should update markdown', () => {
    const markdown = 'Hello';
    expect(updateMarkdown(markdown)).toEqual({ type: UPDATE_MARKDOWN, payload: 'Hello' });
  });
});
