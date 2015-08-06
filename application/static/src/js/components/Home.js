import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'redux/react';
import EventList from './EventList.jsx'
import EventCreator from './EventCreator.jsx'
import * as EventActions from '../actions/EventActions';

@connect(state => ({
  events: state.events
}))
export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { events, dispatch } = this.props;
    let actions = bindActionCreators(EventActions, dispatch);

    return (
      <div>
        <EventList events={events} {...actions} />
        <div className="col-md-1"></div>
        <EventCreator {...actions}/>
      </div>
    );
  }
}
