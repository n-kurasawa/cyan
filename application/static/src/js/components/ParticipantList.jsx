import React from "react";
import FluxComponent from 'flummox/component';
import { Link } from 'react-router';

export default class ParticipantList extends React.Component {
  constructor(props) {
    super(props);
    this.props.flux.getActions('participant').fetchAll(this.props.event_id);
  }

  render() {
    var participants = this.props.participants;

    var items = [];
    participants.forEach((participant)=> {
      items.push(
        <Participant participant={participant}/>
      );
    });

    console.log();

    let event = this.findEvent(this.props.event_id);

    return (
      <div className="participantListarea col-md-4">
        <div className="btn_area">
          <button className="btn btn-default" onClick={this.handleSubmit.bind(this)}>このイベントに参加する</button>
        </div>
        <div className="participantList panel panel-default">
          <div className="panel-heading">
            <div className="people">{participants.length} / {event.max}</div>
            <div className="title">イベント参加者</div>
          </div>
          <ul className="list-group panel-body">
            {items}
          </ul>
        </div>
      </div>
    );
  }

  handleSubmit() {
    this.props.flux.getActions('participant').joinEvent(this.props.event_id);
  }

  findEvent(id) {
    let events = this.props.events.filter((event)=>{
      return event.id === +id;
    });
    return events[0];
  }
}

class Participant extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <li className="list-group-item participant">
        {this.props.participant.name}
      </li>
    );
  }
}
