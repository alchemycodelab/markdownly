import { addFile, ADD_FILE } from './headerActions';

describe('Header Action', () => {
  it('should update tabs', () => {
    const tabs = ['readme'];
    expect(addFile(tabs)).toEqual({ type: ADD_FILE, payload: ['readme'] });
  });
});
