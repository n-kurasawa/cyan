import { FEED_ALL_ACTION,
         CREATE_FEED_ACTION,
         CLEAR_FEED_ACTION
       } from '../constants/ActionTypes';

export default function feeds(state=[], action) {
  switch (action.type) {
    case FEED_ALL_ACTION:
      return action.feeds;

    case CREATE_FEED_ACTION:
      let feed = action.feedUser.feed;
      feed.user = action.feedUser.user;
      return [feed, ...state];

    case CLEAR_FEED_ACTION:
      return [];

    default:
      return state;
  }
}
