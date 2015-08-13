import React from "react";
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import EventDetail from './EventDetail.jsx';
import ParticipantList from './ParticipantList.jsx';
import Feed from './Feed.jsx';
import * as AuthActions from '../actions/AuthActions';
import * as EventActions from '../actions/EventActions';
import * as FeedActions from '../actions/FeedActions';
import * as ParticipantActions from '../actions/ParticipantActions';

@connect(state => ({
  events: state.events,
  feeds: state.feeds,
  participants: state.participants,
  auth: state.auth
}))
export default class Event extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(EventActions.fetchAll());
    dispatch(FeedActions.fetchAll(this.props.params.id));
    dispatch(ParticipantActions.fetchAll(this.props.params.id));
  }

  render() {
    let event_id = this.props.params.id;
    const { events, feeds, participants, auth, dispatch } = this.props;
    return (
      <div>
        <EventDetail event_id={event_id} events={events} />
        <div className="col-md-1"></div>
        <ParticipantList event_id={event_id} events={events} participants={participants} user={auth} {...bindActionCreators(ParticipantActions, dispatch)}/>
        <Feed event_id={event_id} feeds={feeds} {...bindActionCreators(FeedActions, dispatch)}/>
      </div>
    );
  }
}
