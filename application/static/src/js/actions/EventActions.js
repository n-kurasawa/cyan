import * as fetchUtils from '../utils/fetchUtils';
import { EVENT_ALL_ACTION,
         CREATE_EVENT_ACTION,
         JOIN_EVENT_ACTION
       } from '../constants/ActionTypes';

export function fetchAll() {
  return dispatch => {
    fetchUtils.get('/api/events').then(json => {
      dispatch({
        type: EVENT_ALL_ACTION,
        events: json.events
      });
    });
  };
}

export function createEvent(event) {
  return dispatch => {
    fetchUtils.post('/api/events', { event }).then(json=>{
      dispatch({
        type: CREATE_EVENT_ACTION,
        event: json.event
      });
    });
  };
}

export function joinEvent(event_id) {
  return dispatch => {
    fetchUtils.post('/api/event/join', { event_id }).then(json => {
      dispatch({
        type: JOIN_EVENT_ACTION,
        join: {id: json.event.id, join_user: json.join_user}
      });
    });
  };
}
