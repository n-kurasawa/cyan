import * as fetchUtils from '../utils/fetchUtils';
import { GROUP_ALL_ACTION,
         CREATE_GROUP_ACTION,
         INVITE_GROUP_ACTION
       } from '../constants/ActionTypes';

export function fetchAll() {
  return dispatch => {
    fetchUtils.get('/api/groups').then(json => {
      dispatch({
        type: GROUP_ALL_ACTION,
        groups: json.groups
      });
    });
  };
}

export function createGroup(group) {
  return dispatch => {
    fetchUtils.post('/api/groups', { group }).then(json=>{
      dispatch({
        type: CREATE_GROUP_ACTION,
        group: json.group
      });
    });
  };
}

export function inviteGroup(group_id, email) {
  return dispatch => {
    fetchUtils.post('/api/group/invite/' + group_id, { email }).then(json => {
      dispatch({
        type: INVITE_GROUP_ACTION,
        join: {id: json.group_id}
      });
    });
  };
}
