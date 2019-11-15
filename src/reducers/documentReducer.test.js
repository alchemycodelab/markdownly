import reducer from './documentReducer';
import { updateMarkdown, switchTabs } from '../actions/documentActions';

describe('Document Reducer', () => {
  it('should update markdown', () => {
    const state = {
      active: 'Hello',
      files: {
        'Hello': 'test'
      }
    };
    const action = updateMarkdown('Hello2');
    const newState = reducer(state, action);
    expect(newState).toEqual({ ...state, files: { 'Hello': 'Hello2' } }); 
  });

  it('should update active', () => {
    const state = {
      active: 'Hello',
      files: {
        'Hello': 'test',
        'Bye': 'testy'
      }
    };
    const action = switchTabs('Bye');
    const newState = reducer(state, action);
    expect(newState).toEqual({ ...state, active: 'Bye' });
  });
});
