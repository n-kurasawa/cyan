import React from "react";
import FluxComponent from 'flummox/component';
import { Link } from 'react-router';

export default class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.props.flux.getActions('event').fetchAll();
  }

  render() {
    var events = this.props.events;

    var items = [];
    events.forEach((event)=> {
      items.push(
        <EventItem event={event} />
      );
    });

    return (
      <div className="eventList panel panel-default col-md-7">
        <div className="panel-heading">イベント</div>
        <ul className="list-group panel-body">
          {items}
        </ul>
      </div>
    );
  }
}

class EventItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="eventItem list-group-item">
        <div className="item-head">
          <div className="userName">開催者: {this.props.event.user.name}</div>
          <div className="date">日付: {this.props.event.date}</div>
        </div>
        <div className="title">
          <Link to={`/events/${this.props.event.id}`}>{this.props.event.title}</Link>
        </div>
      </li>
    );
  }
}
