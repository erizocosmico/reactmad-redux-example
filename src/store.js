import { compose, combineReducers, createStore } from 'redux';
import { devTools } from 'redux-devtools';

import twist from './reducers/twist';
import form from './reducers/form';

const twister = combineReducers({
  twist,
  form
});

const finalCreateStore = compose(devTools())(createStore);
export default finalCreateStore(twister);
