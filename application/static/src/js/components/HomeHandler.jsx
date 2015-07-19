import React from "react";
import FluxComponent from 'flummox/component';
import EventList from './EventList.jsx'
import EventCreator from './EventCreator.jsx'

export default class HomeHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FluxComponent connectToStores={['event']}>
          <EventList />
        </FluxComponent>
        <div className="col-md-1"></div>
        <FluxComponent>
          <EventCreator />
        </FluxComponent>
      </div>
    );
  }
}
