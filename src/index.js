/**
 * Created by Abhishek on 7/30/2016.
 */

import 'babel-polyfill';
import {Router, browserHistory} from 'react-router';
import React from 'react';
import {render} from 'react-dom';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import {Provider} from 'react-redux';
import configureStore from "./store/configureStore";
import {loadCourses} from './actions/courseActions';

const store = configureStore();
store.dispatch(loadCourses());

render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  ,
  document.getElementById('app')
);
