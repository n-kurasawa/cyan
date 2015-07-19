import { Actions } from 'flummox';
import 'isomorphic-fetch';
import {router} from '../components/App.jsx'

export default class AuthActions extends Actions {

  constructor() {
    super();
  }

  login(auth) {
    return fetch('http://'+ location.host + '/api/login', {
      credentials: 'same-origin',
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( { auth: auth } )
    }).then((response) => {

      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();

    }).then((json) => {
      if (json.user) {
        router.transitionTo('events');
      }
      return json.user;
    });
  }

  loginUser() {
    return fetch('http://'+ location.host + '/api/login/user', {
      credentials: 'same-origin',
      method: 'get',
    }).then((response) => {

      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();

    }).then((json) => {
      console.log(json.user);
      return json.user;
    });
  }
}
