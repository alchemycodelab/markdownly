import { UPDATE_MARKDOWN } from '../actions/editorActions';

const initialState = {
  active: 0,
  list: ['# Hi there', '#sup sup', '#macaroon']
};


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_MARKDOWN:
      return { ...state, markdown: action.payload };
    default:
      return state;
  }
}
