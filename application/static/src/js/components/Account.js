import React from "react";
import { connect } from 'redux/react';

export default class Account extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Account">
        アカウント
      </div>
    );
  }
}
