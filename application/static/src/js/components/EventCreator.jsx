import React from "react";
import FluxComponent from 'flummox/component';

export default class EventCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title,
      date: props.date
    };
  }

  render() {
    return (
      <div className="eventCreator panel panel-default col-md-4">
        <div className="panel-heading">イベント作成</div>
        <div className="panel-body">
          <div className="date">
            <input type="date" value={this.state.date} onChange={this.handelChangeDate.bind(this)} />
          </div>
          <div className="titl">
            <input type="text" placeholder="title" value={this.state.title} onChange={this.handelChangeTitle.bind(this)} />
          </div>
          <div>
            <button className="btn btn-default" onClick={this.handleSubmit.bind(this)}>作成</button>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit() {
    let event = {
      title: this.state.title,
      date: this.state.date
    };
    this.props.flux.getActions('event').createEvent(event);
    this.setState({title: "", date: ""})
  }

  handelChangeTitle(e) {
    this.setState({title: e.target.value});
  }

  handelChangeDate(e) {
    this.setState({date: e.target.value});
  }
}

EventCreator.defaultProps = { title: '', date: ''};
