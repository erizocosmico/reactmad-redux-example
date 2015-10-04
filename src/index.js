require('../style/style.less');
require('babel/polyfill');
import React from 'react';
import { Provider } from 'react-redux';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import Timeline from './components/Timeline';
import store from './store';
React.render(
  (
    <div>
      <Provider store={store}>
        {() => <Timeline />}
      </Provider>
      <DebugPanel right top bottom>
        <DevTools store={store} monitor={LogMonitor} />
      </DebugPanel>
    </div>
  ),
  document.body
);
