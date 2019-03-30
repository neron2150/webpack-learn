import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import App from './containers/App';

import store from './store';
import Details from './components/Details';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={window.history}>
      <Route exact path="/" component={App} />
      <Route path="/details/:id" component={Details} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);
