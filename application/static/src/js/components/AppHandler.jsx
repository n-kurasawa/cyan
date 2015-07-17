import React from "react";
import FluxComponent from 'flummox/component';
import { RouteHandler } from 'react-router';

export default class AppHandler extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Cyan</h1>
        <RouteHandler/>
      </div>
    );
  }
}
