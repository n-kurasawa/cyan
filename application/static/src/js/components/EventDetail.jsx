import React from "react";
import FluxComponent from 'flummox/component';

export default class EventDetail extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.event_id);
  }

  render() {
    return (
      <div className="eventDetail panel panel-default">
        <div className="item-head panel-heading">
          <div className="userName">開催者: </div>
          <div className="date">日付: </div>
        </div>
        <div className="panel-body">
          <div className="title">

          </div>
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
}
