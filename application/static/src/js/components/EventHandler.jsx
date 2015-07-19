import React from "react";
import FluxComponent from 'flummox/component';
import EventDetail from './EventDetail.jsx';
import ParticipantList from './ParticipantList.jsx';
import Feed from './Feed.jsx';

export default class EventHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let event_id = this.props.params.id;

    return (
      <div>
        <FluxComponent connectToStores={['event']}>
          <EventDetail event_id={event_id}/>
        </FluxComponent>
        <div className="col-md-1"></div>
        <FluxComponent connectToStores={['event']}>
          <ParticipantList event_id={event_id} />
        </FluxComponent>
        <FluxComponent connectToStores={['event']}>
          <Feed event_id={event_id} />
        </FluxComponent>
      </div>
    );
  }
}
