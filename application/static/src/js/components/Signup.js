import React, { PropTypes } from 'react';
import { connect } from 'redux/react';
import { Link } from 'react-router';
import * as AuthActions from '../actions/AuthActions';

@connect(state => ({
  auth: state.auth
}))
export default class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      account_id: props.account_id,
      password: props.password,
      email: props.email,
      name: props.name
    };
  }

  static contextTypes = {
    router: PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="form-signup signup">
        <h2 className="form-signup-heading">Please sign up</h2>
        <div className="input-group">
          <span className="input-group-addon">@</span>
          <input type="text" className="form-control" onChange={this.handelChangeAccountId.bind(this)} placeholder="アカウント ID" required autofocus="" />
        </div>
        <input type="email" className="form-control" onChange={this.handelChangeEmail.bind(this)} placeholder="メールアドレス" />
        <input type="text" className="form-control" onChange={this.handelChangeName.bind(this)} placeholder="名前" required autofocus="" />
        <input type="password" className="form-control" onChange={this.handelChangePass.bind(this)} placeholder="パスワード" required />
        <button className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit.bind(this)}>Sign up</button>
        <div className="signin_area">
          <Link to="login">Sign in</Link>
        </div>
      </div>
    );
  }

  handleSubmit() {
    let user = {
      account_id: this.state.account_id,
      password: this.state.password,
      email: this.state.email,
      name: this.state.name
    };
    this.props.dispatch(AuthActions.createUser(user, this.context.router));
  }

  handelChangeAccountId(e) {
    this.setState({account_id: e.target.value});
  }

  handelChangePass(e) {
    this.setState({password: e.target.value});
  }

  handelChangeEmail(e) {
    this.setState({email: e.target.value});
  }

  handelChangeName(e) {
    this.setState({name: e.target.value});
  }
}
Signup.defaultProps = { account_id: '', password: '', email:'', name: ''};
