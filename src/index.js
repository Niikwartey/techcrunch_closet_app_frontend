import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import store from './store';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter children={routes} />
  </Provider>,
  document.getElementById('root')
);
