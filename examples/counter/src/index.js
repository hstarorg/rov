import App from './App';
import { Provider } from '../../../src';
import React from 'react';
import ReactDOM from 'react-dom';

const store = { a: 1 };

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
