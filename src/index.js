import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import 'babel-polyfill';

import App from './containers/App';
import Details from './containers/Details';

import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route exact path="/" component={App} />
      <Route path="/details/:id" component={Details} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
