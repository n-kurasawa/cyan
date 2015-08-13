import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import * as AuthActions from '../actions/AuthActions';
import { Link } from 'react-router';

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
          <div className="container-fluid">
            <div className="navbar-header">
              <Link className="navbar-brand headtitle" to="/events">Cyan</Link>
            </div>
            {(() => {
              if (this.props.auth) {
                return (
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav navbar-right">
                      <li><Link to="/account">アカウント管理</Link></li>
                      <li><Link to="/groups">グループ管理</Link></li>
                      <li><a href="signout" onClick={::this.logout}>Sign out</a></li>
                    </ul>
                  </div>
                )
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

  logout(e) {
    e.preventDefault();
    this.props.dispatch(AuthActions.logout(this.context.router));
  }
}
