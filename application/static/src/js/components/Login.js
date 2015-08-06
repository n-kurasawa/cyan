import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import { Link } from 'react-router';
import * as AuthActions from '../actions/AuthActions';

@connect(state => ({
  auth: state.auth
}))
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account_id: props.account_id,
      password: props.password
    };
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="form-signin">
        <h2 className="form-signin-heading">Please sign in</h2>
        <input type="text" className="form-control" onChange={this.handelChangeLoginId.bind(this)} placeholder="アカウント ID" required autofocus="" />
        <input type="password" className="form-control" onChange={this.handelChangePass.bind(this)} placeholder="パスワード" required />
        <button className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit.bind(this)}>Sign in</button>
        <div className="signup_area">
          <Link to="signup">Sign up</Link>
        </div>
      </div>
    );
  }

  handleSubmit() {
    let auth = {
      account_id: this.state.account_id,
      password: this.state.password
    };
    this.props.dispatch(AuthActions.login(auth, this.context.router));
  }

  handelChangeLoginId(e) {
    this.setState({account_id: e.target.value});
  }

  handelChangePass(e) {
    this.setState({password: e.target.value});
  }
}
Login.defaultProps = { account_id: '', password: ''};
