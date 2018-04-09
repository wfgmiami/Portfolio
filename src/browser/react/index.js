import React from 'react';
import reactDom from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

import App from './containers/App';

const root = document.getElementById('app');

const route = (
  <Provider store= { store }>
    <BrowserRouter>
      <Switch>
        <Route exact path = '/' component = { App }/>
      </Switch>
    </BrowserRouter>

  </Provider>
)
reactDom.render(App, root)
