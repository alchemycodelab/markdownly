import { SAVE_MARKDOWN } from '../actions/pageActions';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case SAVE_MARKDOWN:
      return [...state, action.payload];
    default:
      return state;
  }
}
