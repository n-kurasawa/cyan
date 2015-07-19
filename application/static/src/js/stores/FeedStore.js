import { Store } from 'flummox';

export default class FeedStore extends Store {
  constructor(flux) {
    super();

    const feedActions = flux.getActionIds('feed');
    this.register(feedActions.fetchAll, this.handleFetchAll);
    this.register(feedActions.createFeed, this.handleCreateFeed)

    this.state = {
      feeds: []
    };
  }

  handleFetchAll(feeds) {
    this.setState(feeds);
  }

  handleCreateFeed(feed) {
    this.setState( (state) => {
      state.feeds.push(feed);
      return {feeds: state.feeds};
    });
  }
}
