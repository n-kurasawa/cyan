import { Actions } from 'flummox';
import 'isomorphic-fetch';

export default class ParticipantActions extends Actions {

  constructor() {
    super();
  }

  fetchAll(event_id) {
    this.__clear();
    this.__fetchAll(event_id);
  }

  __fetchAll(event_id) {
    return fetch('http://'+ location.host + '/api/event/participants/' + event_id, {
      method: 'get',
      credentials: 'same-origin'
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then((json) => {
      return json.users;
    });
  }

  joinEvent(event_id) {
    return fetch('http://'+ location.host + '/api/event/join', {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {event_id: event_id} )
    }).then((response) => {

      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();

    }).then((json) => {
      return json.user;
    });
  }

  cancelEvent(event_id) {
    return fetch('http://'+ location.host + '/api/event/cancel', {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( {event_id: event_id} )
    }).then((response) => {

      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();

    }).then((json) => {
      return json.user;
    });
  }

  __clear() {
    return '';
  }

}
