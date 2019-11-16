import { createStore, compose } from 'redux';
import reducer from './reducers';
import { saveState } from './localStorage';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers()
);

store.subscribe(() => {
  const state = store.getState();
  saveState({ state: state });
});

export default store;
