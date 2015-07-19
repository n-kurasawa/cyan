import React from "react";
import FluxComponent from 'flummox/component';

export default class EventDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let event = this.findEvent(this.props.event_id);

    return (
      <div className="eventDetail panel panel-default col-md-7">
        <div className="panel-heading">
          <div className="item-head">
            <div className="userName">主催者: {event.user.name}</div>
            <div className="date">開催日: {event.date} </div>
          </div>
          <div className="title">{event.title}</div>
        </div>
        <div className="panel-body">
          <div className="item-detail place">
            <div className="item-detail-head">会場</div>
            {event.place}
          </div>
          <div className="item-detail description">
            <div className="item-detail-head">詳細</div>
            {event.description}
          </div>
          <div className="item-detail description">
            <div className="item-detail-head">資料</div>
            資料なし
          </div>
        </div>
      </div>
    );
  }

  findEvent(id) {
    let events = this.props.events.filter((event)=>{
      return event.id === +id;
    });
    return events[0];
  }
}
