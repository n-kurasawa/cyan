import { Store } from 'flummox';

export default class ParticipantStore extends Store {
  constructor(flux) {
    super();

    const participantActions = flux.getActionIds('participant');
    this.register(participantActions.fetchAll, this.handleFetchAll)
    this.register(participantActions.joinEvent, this.handleJoinEvent)
    this.register(participantActions.cancelEvent, this.handleCancelEvent)

    this.state = {
      participants: []
    };
  }

  handleFetchAll(users) {
    this.setState({participants: users});
  }

  handleJoinEvent(user) {
    this.state.participants.push(user);
    this.setState({participants: this.state.participants});
  }

  handleCancelEvent(user) {
    var participants = this.state.participants.filter((participant)=>{
      return participant.id !== user.id;
    });
    this.setState({participants: participants});
  }

}
