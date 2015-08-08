import * as fetchUtils from '../utils/fetchUtils';
import { LOGIN_ACTION,
         LOGIN_USER_ACTION,
         CREATE_USER_ACTION,
         LOGOUT_ACTION
       } from '../constants/ActionTypes';

export function login(auth, router) {
  return dispatch => {
    fetchUtils.post('/api/login', { auth }).then(json => {
      if (json.user) {
        router.transitionTo('events');
      }
      dispatch({
        type: LOGIN_ACTION,
        user: json.user
      });
    });
  };
}

export function logout(router) {
  return dispatch => {
    fetchUtils.post('/api/logout').then( json => {
      if (json.logout) {
        router.transitionTo('/login');
      }
      dispatch({
        type: LOGOUT_ACTION
      });
    });
  };
}

export function createUser(user, router) {
  return dispatch => {
    fetchUtils.post('/api/users',{ user }).then( json => {
      if (json.user) {
        router.transitionTo('events');
      }
      dispatch({
        type: CREATE_USER_ACTION,
        user: json.user
      });
    });
  }
}

export function loginUser() {
  return dispatch => {
   fetchUtils.get('/api/login/user').then(json=>{
     dispatch({
       type: LOGIN_USER_ACTION,
       user: json.user
     });
   });
 };
}
