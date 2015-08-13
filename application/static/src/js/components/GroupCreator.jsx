import React from "react";

export default class GroupCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      description: props.title,
    };
  }

  render() {
    return (
      <div className="groupCreator panel panel-default col-md-4">
        <div className="panel-heading">グループ作成</div>
        <div className="panel-body">
          <div className="item name">
            <div className="item-title">グループ名</div>
            <input type="text" value={this.state.name} onChange={this.handelChangeName.bind(this)} />
          </div>
          <div className="item description">
            <div className="item-title">詳細</div>
            <textarea value={this.state.description} onChange={this.handelChangeDescription.bind(this)} >
            </textarea>
          </div>
          <div className="btn_area">
            <button className="btn btn-default" onClick={this.handleSubmit.bind(this)}>作成</button>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit() {
    let group = {
      name: this.state.name,
      description: this.state.description,
    };
    this.props.createGroup(group);
    this.setState({ name: '', description: ''})
  }

  handelChangeName(e) {
    this.setState({name: e.target.value});
  }

  handelChangeDescription(e) {
    this.setState({description: e.target.value});
  }

}

GroupCreator.defaultProps = { name: '', description: ''};
