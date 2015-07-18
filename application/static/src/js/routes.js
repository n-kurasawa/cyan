import React from 'react';
import { Route, Redirect, DefaultRoute } from 'react-router';
import AppHandler from './components/AppHandler.jsx';
import HomeHandler from './components/HomeHandler.jsx';
import LoginHandler from './components/LoginHandler.jsx';

export default (
  <Route name="app" path="/" handler={AppHandler}>
    <Route name="home" path="/" handler={HomeHandler}/>
    <Route name="login" path="/login" handler={LoginHandler}/>
    <Redirect from="*" to="home" />
  </Route>
);
