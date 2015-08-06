import * as fetchUtils from '../utils/fetchUtils';
import { PARTICIPANT_ALL_ACTION,
         PARTICIPANT_CANCEL_EVENT_ACTION,
         PARTICIPANT_JOIN_EVENT_ACTION,
         PARTICIPANT_CLEAR_ACTION
       } from '../constants/ActionTypes';

export function fetchAll(event_id) {
  return dispatch => {
    fetchUtils.get('/api/event/participants/' + event_id).then(json => {
      dispatch({
        type: PARTICIPANT_ALL_ACTION,
        users: json.users
      });
    });
  };
}

export function joinEvent(event_id) {
  return dispatch => {
    fetchUtils.post('/api/event/join', { event_id }).then(json => {
      dispatch({
        type: PARTICIPANT_JOIN_EVENT_ACTION,
        user: json.user
      });
    });
  }
}

export function cancelEvent(event_id) {
  return dispatch => {
    fetchUtils.post('/api/event/cancel', { event_id }).then(json => {
      dispatch({
        type: PARTICIPANT_CANCEL_EVENT_ACTION,
        user: json.user
      });
    });
  };
}

export function clear() {
  return {
    type: PARTICIPANT_CLEAR_ACTION
  }
}
