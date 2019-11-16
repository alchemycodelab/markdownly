import { getActiveIndex, getMarkdownArray, getActiveMarkdown } from './markdownSelector';

describe('markdown selectors', () => {
  it('can get active index', () => {
    const state = {
      editor: {
        active: 1,
        list: ['hi', 'there', 'eat', 'stuff']
      }
    };

    const index = getActiveIndex(state);
    expect(index).toEqual(1);
  });

  it('can get markdown list', () => {
    const state = {
      editor: {
        active: 1,
        list: ['hi', 'there', 'eat', 'stuff']
      }
    };

    const list = getMarkdownArray(state);
    expect(list).toEqual(['hi', 'there', 'eat', 'stuff']);
  });

  it('can get active markdown', () => {
    const state = {
      editor: {
        active: 1,
        list: ['hi', 'there', 'eat', 'stuff']
      }
    };

    const markdown = getActiveMarkdown(state);
    expect(markdown).toEqual('there');
  });
});
