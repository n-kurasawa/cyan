import React from "react";
import { Link } from 'react-router';

export default class GroupList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var groups = this.props.groups;

    var items = [];
    groups.forEach((group)=> {
      items.push(
        <GroupItem key={group.id} group={group} />
      );
    });

    return (
      <div className="groupList panel panel-default col-md-7">
        <div className="panel-heading">グループ</div>
        <ul className="list-group panel-body">
          {items}
        </ul>
      </div>
    );
  }
}

class GroupItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="groupItem list-group-item">
        <div className="item-head">
          <div className="userName">オーナー: {this.props.group.owner.name} </div>
        </div>
        <div className="title">
          <Link to={`/groups/${this.props.group.id}`}>{this.props.group.name}</Link>
        </div>
      </li>
    );
  }
}
