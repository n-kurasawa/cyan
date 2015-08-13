import React, { Component, PropTypes } from 'react'
import { Redirect, Router, Route } from 'react-router'
import { Provider } from 'redux/react'
import { createRedux } from 'redux'
import * as fetchUtils from './utils/fetchUtils';
import * as components from './components'
import * as reducers from './reducers';

const { Application, Login, Signup, Home, Event, Account, Groups, Group } = components;

const redux = createRedux(reducers);

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render () {
    const { history } = this.props
    return (
      <Provider redux={redux}>
        {renderRoutes.bind(null, history)}
      </Provider>
    )
  }
}

function renderRoutes(history) {
  return (
    <Router history={history}>
      <Route name="app" component={Application}>
        <Route name="login" path="/login" component={Login}/>
        <Route name="signup" path="/signup" component={Signup}/>
        <Route name="events" path="/events" component={Home} onEnter={requireAuth}/>
        <Route name="event" path="/events/:id" component={Event} onEnter={requireAuth}/>
        <Route name="account" path="/account" component={Account} onEnter={requireAuth}/>
        <Route name="groups" path="/groups" component={Groups} onEnter={requireAuth}/>
        <Route name="group" path="/groups/:id" component={Group} onEnter={requireAuth}/>
        <Redirect from="*" to="events" />
      </Route>
    </Router>
  )
}

async function requireAuth(nextState, transition, callback) {
  let json = await fetchUtils.get('/api/login/check');
  if (!json.isLogin) {
    transition.to('/login', null, { nextPathname: nextState.location.pathname });
  }
  callback();
}
