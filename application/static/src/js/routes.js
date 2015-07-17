import React from 'react';
import { Route, Redirect, DefaultRoute } from 'react-router';
import AppHandler from './components/AppHandler.jsx';
import HomeHandler from './components/HomeHandler.jsx';

export default (
  <Route name="app" path="/" handler={AppHandler}>
    <Route name="home" path="/" handler={HomeHandler}/>
    <Redirect from="*" to="home" />
  </Route>
);
