import React from "react";

export default class Application extends React.Component {
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
          {this.props.children}
        </div>
      </div>
    );
  }
}
