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
  }

  render() {
    const { groups, events, dispatch } = this.props;
    let actions = bindActionCreators(GroupActions, dispatch);

    return (
      <div className="group">
        <GroupList groups={groups} {...actions} />
        <div className="col-md-1"></div>
        <GroupCreator {...actions}/>
      </div>
    );
  }
}
