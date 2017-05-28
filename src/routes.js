/**
 * Created by Abhishek on 7/31/2016.
 */
import React from 'react';
import{Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import Login from './components/login/LoginPage';
import ContactUs from './components/about/ContactUs';
import Team from './components/about/Team';
import Profile from './components/about/Profile';
import * as Cookies from 'js-cookie';

function checkAuth(nextState, replace) {
let user = Cookies.getJSON('user');
if(!user || !user.accessToken)
    {
        replace({
            pathname: '/',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Login}/>
      <Route path="/home" components={HomePage} onEnter={checkAuth}/>
      <Route path="/about" component={AboutPage} onEnter={checkAuth}>
          <IndexRoute component={Profile}/>
          <Route path="/about/profile" component={Profile}/>
          <Route path="/about/team" component={Team}/>
          <Route path="/about/contactUs" component={ContactUs}/>
      </Route>
  </Route>
);
