import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from '../../../src';
import App from './App';

const store = { a: 1 };

const NewApp = connect()(App);

ReactDOM.render(
  <Provider store={store}>
    <App />
    <hr />
    <NewApp />
  </Provider>,
  document.getElementById('root')
);
