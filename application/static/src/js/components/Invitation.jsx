import React from "react";
// import { bindActionCreators } from 'redux';
// import { connect } from 'redux/react';

export default class Invitation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
    };
  }

  render() {
    return (
      <div className="invitation panel panel-default">
        <div className="panel-heading">グループへ招待</div>
        <div className="panel-body">
          <input type="text" value={this.state.email} onChange={this.handleChangeEmail.bind(this)} placeholder="Emailアドレス" />
          <div className="btn_area">
            <button className="btn btn-default" onClick={this.handleSubmit.bind(this)}>招待する</button>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit() {
    this.props.inviteGroup(this.props.group.id, this.state.email);
    this.setState({email: ''});
  }

  handleChangeEmail(e) {
    this.setState({email: e.target.value});
  }
}

Invitation.defaultProps = { email: '' };
