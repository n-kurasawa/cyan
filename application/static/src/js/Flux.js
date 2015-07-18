import Flummox from 'flummox';
import EventActions from './actions/EventActions';
import EventStore from './stores/EventStore';
import AuthActions from './actions/AuthActions';
import AuthStore from './stores/AuthStore';

export default class Flux extends Flummox {
  constructor() {
    super();
    this.createActions('event', EventActions);
    this.createStore('event', EventStore, this);
    this.createActions('auth', AuthActions);
    this.createStore('auth', AuthStore, this);
  }
}
