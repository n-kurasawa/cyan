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
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand headtitle" href="#">Cyan</a>
          </div>
        </nav>
        <div className="container">
          <FluxComponent>
            <RouteHandler/>
          </FluxComponent>
        </div>
      </div>
    );
  }
}
