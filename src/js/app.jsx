/* global process */

import React from 'react';
import { syncHistoryWithStore } from 'react-router-redux';
import {
  Router,
  Route,
  browserHistory
} from 'react-router';

import classifier from 'modules/classifier';
import Store from './store';

// Only load the dev tools in development
const DevTools = (process.env.NODE_ENV === 'development') ?
require('lib/components/devTools').default : f => f;

const history = syncHistoryWithStore(browserHistory, Store);

const App = () => (
  <div>
    {process.env.NODE_ENV === 'development' ? <DevTools /> : null}
    <Router history={history}>
      <Route path="/" component={classifier.ClassifierView} />
    </Router>
  </div>
  );

export default App;
