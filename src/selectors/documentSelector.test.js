import { getMarkdown } from './documentSelectors';

describe.skip('Document Selectors', () => {
  it('should get Markdown', () => {
    const state = {
      document: {
        markdown: 'Hello'
      }
    };
    const markdown = getMarkdown(state);
    expect(markdown).toEqual('Hello');
  });
});
