import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import {  Router } from 'react-router-dom';
import { routes } from 'routes';
import { Provider } from 'react-redux';
import configureStore from 'store/configureStore';
const store = configureStore();

render(
  ({ history }) => (
    <Provider store = {store}>
      <Router hisory = {history} routes = {routes} />
    </Provider>
),
document.getElementById('root')
);
