import { Store } from 'flummox';

export default class FeedStore extends Store {
  constructor(flux) {
    super();

    const feedActions = flux.getActionIds('feed');
    this.register(feedActions.__fetchAll, this.handleFetchAll);
    this.register(feedActions.createFeed, this.handleCreateFeed)
    this.register(feedActions.__clear, this.handleClear)

    this.state = {
      feeds: []
    };
  }

  handleFetchAll(feeds) {
    this.setState(feeds);
  }

  handleCreateFeed(feedUser) {
    this.setState( (state) => {
      let feed = feedUser.feed;
      feed.user = feedUser.user;
      state.feeds.push(feed);
      return {feeds: state.feeds};
    });
  }

  handleClear() {
    this.setState({feeds: []});
  }
}
