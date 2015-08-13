import React from "react";
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import * as GroupActions from '../actions/GroupActions';
import GroupDetail from './GroupDetail.jsx'
import GroupMember from './GroupMember.jsx'

@connect(state => ({
  groups: state.groups
}))
export default class Group extends React.Component {
  constructor(props) {
    super(props);
    const { dispatch } = this.props;
    dispatch(GroupActions.fetchAll());
  }

  render() {
    let group_id = this.props.params.id;
    const { groups, dispatch } = this.props;
    return (
      <div>
        <GroupDetail group_id={group_id} groups={groups} />
        <div className="col-md-1"></div>
        <GroupMember group_id={group_id} groups={groups} {...bindActionCreators(GroupActions, dispatch)}/>
      </div>
    );
  }
}
