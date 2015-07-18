import { Store } from 'flummox';

export default class EventStore extends Store {
  constructor(flux) {
    super();

    const eventActions = flux.getActionIds('event');
    this.register(eventActions.fetchAll, this.handleFetchAll);
    this.register(eventActions.createEvent, this.handleCreateEvent)

    this.state = {
      events: []
    };
  }

  handleFetchAll(events) {
    this.setState(events);
  }

  handleCreateEvent(event) {
    this.setState( (state) => {
      state.events.push(event);
      return {events: state.events};
    });
  }

}
