import { combineReducers, createStore } from 'redux';

import twist from './reducers/twist';
import form from './reducers/form';

const twister = combineReducers({
  twist,
  form
});

export default createStore(twister);
