import React from "react";
import FluxComponent from 'flummox/component';
import EventDetail from './EventDetail.jsx';
import ParticipantList from './ParticipantList.jsx';

export default class EventHandler extends React.Component {
  constructor(props) {
    super(props);
    this.event_id = this.props.params.id;
  }

  render() {
    return (
      <div>
        <FluxComponent connectToStores={['event']}>
          <EventDetail event_id={this.event_id}/>
        </FluxComponent>
        <div className="col-md-1"></div>
        <FluxComponent connectToStores={['event']}>
          <ParticipantList event_id={this.event_id} />
        </FluxComponent>
      </div>
    );
  }
}
