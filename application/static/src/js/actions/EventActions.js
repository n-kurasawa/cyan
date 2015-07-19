import { Actions } from 'flummox';
import 'isomorphic-fetch';

export default class EventActions extends Actions {

  constructor() {
    super();
  }

  fetchAll() {
    return fetch('http://'+ location.host + '/api/events', {
      method: 'get',
      credentials: 'same-origin'
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then((events) => {
      return events;
    });
  }

  createEvent(event) {
    return fetch('http://'+ location.host + '/api/events', {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( { event: event} )
    }).then((response) => {

      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();

    }).then((json) => {
      return json.event;
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
      return {id: json.event.id, join_user: json.join_user};
    });
  }

}
