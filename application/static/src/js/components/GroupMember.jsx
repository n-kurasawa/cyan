import React from "react";
import { Link } from 'react-router';

export default class GroupMember extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="groupMember col-md-4">
        <Member />
      </div>
    );
  }
}

class Member extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      <li className="list-group-item member">
      </li>
    );
  }
}
