import App from './App';
import { Provider } from '../../../src';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById('root')
);
