import React from "react";
import { Link } from 'react-router';
import Invitation from './Invitation.jsx'

export default class GroupMemberList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let group = this.props.group;

    let members = [];
    if (group) {
      group.users.forEach((user)=>{
        members.push(
          <GroupMember key={user.id} user={user} />
        );
      });
    }

    return (
      <div className="col-md-4">
        <Invitation group={group} inviteGroup={this.props.inviteGroup}/>
        <div className="groupMemberList panel panel-default">
          <div className="panel-heading">
            <div className="people">{members.length} 人</div>
            <div className="title">グループメンバー</div>
          </div>
          <ul className="list-group panel-body">
            {members}
          </ul>
        </div>
      </div>
    );
  }
}

class GroupMember extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <li className="list-group-item groupMember">
        {this.props.user.name}
      </li>
    );
  }
}
