import React from "react";
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import GroupList from './GroupList.jsx';
import GroupCreator from './GroupCreator.jsx';
import * as GroupActions from '../actions/GroupActions';

@connect(state => ({
  groups: state.groups
}))
export default class Groups extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(GroupActions.fetchAll());
  }

  render() {
    const { groups, dispatch } = this.props;

    return (
      <div className="group">
        <GroupList groups={groups} />
        <div className="col-md-1"></div>
        <GroupCreator {...bindActionCreators(GroupActions, dispatch)}/>
      </div>
    );
  }
}
