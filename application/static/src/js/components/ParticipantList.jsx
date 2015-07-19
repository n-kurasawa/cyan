import React from "react";
import FluxComponent from 'flummox/component';
import { Link } from 'react-router';

export default class ParticipantList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var participans = ["", "", ""];

    var items = [];
    participans.forEach((participant)=> {
      items.push(
        <Participant participant={participant}/>
      );
    });

    return (
      <div className="participantList panel panel-default col-md-4">
        <div className="panel-heading">イベント参加者</div>
        <ul className="list-group panel-body">
          {items}
        </ul>
      </div>
    );
  }
}

class Participant extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div calssName="list-group-item participant">
        参加者
      </div>
    );
  }
}
