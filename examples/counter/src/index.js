import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from '../../../src';
import App from './App';
import { store } from './store';

const NewApp = connect()(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <hr />
    <NewApp />
  </Provider>,
  document.getElementById('root')
);
