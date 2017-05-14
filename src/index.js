import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import routes from './routes';
import './index.css';

ReactDOM.render(
  <BrowserRouter children={routes} />,
  document.getElementById('root')
);
