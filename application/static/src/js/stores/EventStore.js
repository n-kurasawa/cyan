import { Store } from 'flummox';

export default class EventStore extends Store {
  constructor(flux) {
    super();

    const eventActions = flux.getActionIds('event');
    this.register(eventActions.fetchAll, this.handleFetchAll);
    this.register(eventActions.createEvent, this.handleCreateEvent)
    this.register(eventActions.joinEvent, this.handleJoinEvent)

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

  handleJoinEvent(join) {
    this.setState( (state) => {

      state.events.forEach((event)=>{
        console.log(event.id, join.id);
        if (event.id === join.id) {
          if (event.participant) {
            event.participant.push(join.joinUser);
          } else {
            event.participant = [join.joinUser];
          }
        }

        return {events: state.events};
      });
    });
  }

}
