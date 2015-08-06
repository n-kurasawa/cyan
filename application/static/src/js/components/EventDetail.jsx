import React from "react";

export default class EventDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let event = this.findEvent(this.props.event_id);
    if (event) {
      var name = event.user.name;
      var date = event.date;
      var title = event.title;
      var place = event.place;
      var description = event.description;
    }

    return (
      <div className="eventDetail panel panel-default col-md-7">
        <div className="panel-heading">
          <div className="item-head">
            <div className="userName">主催者: {name}</div>
            <div className="date">開催日: {date} </div>
          </div>
          <div className="title">{title}</div>
        </div>
        <div className="panel-body">
          <div className="item-detail place">
            <div className="item-detail-head">会場</div>
            {place}
          </div>
          <div className="item-detail description">
            <div className="item-detail-head">詳細</div>
            {description}
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
