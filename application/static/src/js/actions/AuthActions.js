import { Actions } from 'flummox';
import 'isomorphic-fetch';

export default class AuthActions extends Actions {

  constructor() {
    super();
  }

  login(auth) {
    return fetch('http://'+ location.host + '/api/login', {
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
      return json.user;
    });
  }
}
