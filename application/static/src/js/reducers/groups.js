import { GROUP_ALL_ACTION,
         CREATE_GROUP_ACTION,
         INVITE_GROUP_ACTION
       } from '../constants/ActionTypes';

export default function groups(state=[], action) {
  switch (action.type) {
    case GROUP_ALL_ACTION:
      return action.groups;

    case CREATE_GROUP_ACTION:
      return [action.group, ...state];

    case INVITE_GROUP_ACTION:

      return state;

    default:
      return state;
  }
}
