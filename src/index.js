require('babel/polyfill');
import React from 'react/addons';
import { Provider } from 'react-redux';

import Timeline from './components/Timeline';
import store from './store';
React.render(
  <Provider store={store}>
    {() => <Timeline />}
  </Provider>,
  document.body
);
