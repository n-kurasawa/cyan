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
            <div className="userName">開催者: {event.user.name}</div>
            <div className="date">日付: {event.date} </div>
          </div>
          <div className="title">{event.title}</div>
        </div>
        <div className="panel-body">
          <div className="description">
            詳細
          </div>
          <div className="document">
            資料
          </div>
          <div className="others">
            その他
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
