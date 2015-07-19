import Flummox from 'flummox';
import EventActions from './actions/EventActions';
import EventStore from './stores/EventStore';
import AuthActions from './actions/AuthActions';
import AuthStore from './stores/AuthStore';
import ParticipantActions from './actions/ParticipantActions';
import ParticipantStore from './stores/ParticipantStore';
import FeedActions from './actions/FeedActions';
import FeedStore from './stores/FeedStore';

export default class Flux extends Flummox {
  constructor() {
    super();
    this.createActions('event', EventActions);
    this.createStore('event', EventStore, this);
    this.createActions('auth', AuthActions);
    this.createStore('auth', AuthStore, this);
    this.createActions('participant', ParticipantActions);
    this.createStore('participant', ParticipantStore, this);
    this.createActions('feed', FeedActions);
    this.createStore('feed', FeedStore, this);
  }
}
