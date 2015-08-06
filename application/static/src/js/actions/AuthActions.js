import * as fetchUtils from '../utils/fetchUtils';
import { LOGIN_ACTION,
         LOGIN_USER_ACTION,
         CREATE_USER_ACTION
       } from '../constants/ActionTypes';

export async function login(auth, router) {
  let json = await fetchUtils.post('/api/login', { auth });
  if (json.user) {
    router.transitionTo('events');
  }
}

export async function createUser(user, router) {
  let json = await fetchUtils.post('/api/users',{ user });
  if (json.user) {
    router.transitionTo('events');
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
