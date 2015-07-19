import React from 'react';
import 'isomorphic-fetch';

export default (Component) => {
  return class Authenticated extends React.Component {
      static willTransitionTo(transition, params, query, callback) {
        Authenticated.check(transition, callback);
      }

      render () {
        return <Component {...this.props}/>
      }

      static check(transition, callback) {
        return fetch('http://'+ location.host + '/api/login/check', {
          method: 'get',
          credentials: 'same-origin'
        }).then((response) => {
          if (response.status >= 400) {
            throw new Error("Bad response from server");
          }
          return response.json();
        }).then((json) => {
          if (json.isLogin) {
            callback();
          } else {
            transition.redirect('/login', {}, {'nextPath' : transition.path});
            callback();
          }
        });
      }
  }
};
