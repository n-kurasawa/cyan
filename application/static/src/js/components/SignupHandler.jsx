import React from "react";
import FluxComponent from 'flummox/component';

export default class SignupHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.loginId,
      date: props.pass
    };
  }

  render() {
    return (
      <div className="form-signup signup">
        <h2 className="form-signup-heading">Please sign up</h2>
        <input type="text" className="form-control" onChange={this.handelChangeLoginId.bind(this)} placeholder="Login ID" required autofocus="" />
        <input type="password" className="form-control" onChange={this.handelChangePass.bind(this)} placeholder="Password" required />
        <button className="btn btn-lg btn-primary btn-block" onClick={this.handleSubmit.bind(this)}>Sign up</button>
      </div>
    );
  }

  handleSubmit() {
    let auth = {
      loginId: this.state.loginId,
      pass: this.state.pass
    };
    this.props.flux.getActions('auth').login(auth);
  }

  handelChangeLoginId(e) {
    this.setState({loginId: e.target.value});
  }

  handelChangePass(e) {
    this.setState({pass: e.target.value});
  }
}
SignupHandler.defaultProps = { loginId: '', pass: ''};
