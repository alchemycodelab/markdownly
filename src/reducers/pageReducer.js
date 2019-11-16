import { SAVE_MARKDOWN } from '../actions/pageActions';
import { loadState } from '../localStorage';

const defaultState = [];

const initialState = loadState() ? loadState().state.saves : defaultState;

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_MARKDOWN:
      return [...state, action.payload];
    default:
      return state;
  }
}
