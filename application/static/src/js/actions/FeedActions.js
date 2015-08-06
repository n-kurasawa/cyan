import * as fetchUtils from '../utils/fetchUtils';
import { FEED_ALL_ACTION,
         CREATE_FEED_ACTION,
         CLEAR_FEED_ACTION
       } from '../constants/ActionTypes';

export function fetchAll(event_id) {
  return dispatch => {
    fetchUtils.get('/api/feeds/' + event_id).then(json=>{
      dispatch({
        type: FEED_ALL_ACTION,
        feeds: json.feeds
      });
    });
  }
}

export function createFeed(feed, fetchAll) {
  return dispatch => {
    fetchUtils.post('/api/feeds/' + fetchAll, { feed }).then(json => {
      dispatch({
        type: CREATE_FEED_ACTION,
        feedUser: {feed: json.feed, user: json.user}
      });
    });
  };
}

export function clear() {
  return {
    type: CLEAR_FEED_ACTION
  }
}
