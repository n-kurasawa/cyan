import { LOGIN_ACTION,
         LOGIN_USER_ACTION,
         CREATE_USER_ACTION,
         LOGOUT_ACTION
       } from '../constants/ActionTypes';

export default function auth(state=null, action) {

  switch (action.type) {
    case LOGIN_ACTION:
      return action.user;

    case LOGOUT_ACTION:
      return null;

    case LOGIN_USER_ACTION:
      return action.user;

    case CREATE_USER_ACTION:
      return action.user;
    default:
      return state;
  }
}
