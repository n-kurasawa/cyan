import React from "react";
import { connect } from 'redux/react';
import { bindActionCreators } from 'redux';
import * as GroupActions from '../actions/GroupActions';
import GroupDetail from './GroupDetail.jsx'
import GroupMemberList from './GroupMemberList.jsx'

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
    const { dispatch } = this.props;
    let group = this.findById(group_id);

    return (
      <div>
        <GroupDetail group={group} />
        <div className="col-md-1"></div>
        <GroupMemberList group={group} {...bindActionCreators(GroupActions, dispatch)}/>
      </div>
    );
  }

  findById(group_id) {
    return this.props.groups.find((group)=>{
      return group.id === +group_id;
    });
  }
}
