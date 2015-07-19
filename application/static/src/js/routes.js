import React from 'react';
import { Route, Redirect, DefaultRoute } from 'react-router';
import AppHandler from './components/AppHandler.jsx';
import HomeHandler from './components/HomeHandler.jsx';
import LoginHandler from './components/LoginHandler.jsx';
import EventHandler from './components/EventHandler.jsx';

import AuthCheck from './components/AuthCheck.jsx'


export default (
  <Route name="app" path="/" handler={AppHandler}>
    <Route name="login" path="/login" handler={LoginHandler}/>
    <Route name="events" path="/events" handler={AuthCheck(HomeHandler)} />
    <Route name="event" path="/events/:id" handler={AuthCheck(EventHandler)}/>
    <Redirect from="*" to="events" />
  </Route>
);
