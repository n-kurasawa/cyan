import React from "react";
import FluxComponent from 'flummox/component';
import { Link } from 'react-router';

export default class ParticipantList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var participants = this.props.participants;
    var loginUser = this.props.user;

    var items = [];
    participants.forEach((participant)=> {
      items.push(
        <Participant key={participant.id} participant={participant}/>
      );
    });

    if (loginUser && this.isJoin(loginUser, participants)) {
      var btn = (<button className="btn btn-default" onClick={this.handleCancel.bind(this)}>このイベントをキャンセルする</button>);
    } else {
      var btn = (<button className="btn btn-default" onClick={this.handleSubmit.bind(this)}>このイベントに参加する</button>);
    }

    let event = this.findEvent(this.props.event_id);
    let max = event ? event.max : 0;
    return (
      <div className="participantListarea col-md-4">
        <div className="btn_area">
          {btn}
        </div>
        <div className="participantList panel panel-default">
          <div className="panel-heading">
            <div className="people">{participants.length} / {max}</div>
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

  handleCancel() {
    this.props.flux.getActions('participant').cancelEvent(this.props.event_id);
  }

  findEvent(id) {
    let events = this.props.events.filter((event)=>{
      return event.id === +id;
    });
    return events[0];
  }

  isJoin(loginUser, participants) {
    return participants.some((participant)=>{
      return participant.id === loginUser.id;
    });
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
