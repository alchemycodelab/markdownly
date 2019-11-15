import { getFiles } from './headerSelectors';

describe.skip('Header Selectors', () => {
  it('should get tabs', () => {
    const state = {
      header: {
        tabs: []
      }
    };
    const tabs = getFiles(state);
    expect(tabs).toEqual([]);
  });
});
