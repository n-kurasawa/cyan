import { Actions } from 'flummox';
import 'isomorphic-fetch';

export default class FeedActions extends Actions {

  constructor() {
    super();
  }

  fetchAll(event_id) {
    this.__clear();
    this.__fetchAll(event_id);
  }

  __fetchAll(event_id) {
    return fetch('http://'+ location.host + '/api/feeds/' + event_id, {
      method: 'get',
      credentials: 'same-origin'
    }).then((response) => {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    }).then((feeds) => {
      return feeds;
    });
  }

  createFeed(feed, fetchAll) {
    return fetch('http://'+ location.host + '/api/feeds/' + fetchAll, {
      method: 'post',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify( { feed: feed} )
    }).then((response) => {

      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();

    }).then((json) => {
      return {feed: json.feed, user: json.user};
    });
  }

  __clear() {
    return 'clear';
  }
}
