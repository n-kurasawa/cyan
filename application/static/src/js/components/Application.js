import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import * as AuthActions from '../actions/AuthActions';

@connect(state => ({
  auth: state.auth
}))
export default class Application extends React.Component {
  constructor(props) {
    super(props);
    this.props.dispatch(AuthActions.loginUser());
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="application">
        <nav className="navbar navbar-default">
          <div className="navbar-header">
            <a className="navbar-brand headtitle" href="#">Cyan</a>
          </div>
          <div className="pull-right">
            {(() => {
              if (this.props.auth) {
                return (<button className="btn sign-out" onClick={::this.logout}>Sign out</button>)
              }
            })()}
          </div>
        </nav>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }

  logout() {
    this.props.dispatch(AuthActions.logout(this.context.router));
  }
}
