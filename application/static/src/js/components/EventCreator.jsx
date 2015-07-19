import React from "react";
import FluxComponent from 'flummox/component';

export default class EventCreator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: props.date,
      title: props.title,
      description: props.title,
      document: props.document,
      max: props.max
    };
  }

  render() {
    return (
      <div className="eventCreator panel panel-default col-md-4">
        <div className="panel-heading">イベント作成</div>
        <div className="panel-body">
          <div className="item date">
            <div className="item-title">開催日</div>
            <input type="date" value={this.state.date} onChange={this.handelChangeDate.bind(this)} />
          </div>
          <div className="item title">
            <div className="item-title">タイトル</div>
            <input type="text" value={this.state.title} onChange={this.handelChangeTitle.bind(this)} />
          </div>
          <div className="item title">
            <div className="item-title">最大人数</div>
            <input type="text" value={this.state.max} onChange={this.handelChangeMax.bind(this)} />
          </div>
          <div className="item place">
            <div className="item-title">会場</div>
            <input type="text" value={this.state.place} onChange={this.handelChangePlace.bind(this)} />
          </div>
          <div className="item description">
            <div className="item-title">詳細</div>
            <textarea value={this.state.description} onChange={this.handelChangeDescription.bind(this)} >
            </textarea>
          </div>
          <div className="item document">
            <div className="item-title">資料</div>
            <input type="file" value={this.state.document} onChange={this.handelChangeDocument.bind(this)} />
          </div>
          <div className="btn_area">
            <button className="btn btn-default" onClick={this.handleSubmit.bind(this)}>作成</button>
          </div>
        </div>
      </div>
    );
  }

  handleSubmit() {
    let event = {
      title: this.state.title,
      date: this.state.date,
      max: this.state.max,
      place: this.state.place,
      description: this.state.description,
      document: this.state.document
    };
    this.props.flux.getActions('event').createEvent(event);
    this.setState({ title: '', date: '', max: '', place: '', description: '', document: ''})
  }

  handelChangeTitle(e) {
    this.setState({title: e.target.value});
  }

  handelChangeMax(e) {
    this.setState({max: e.target.value});
  }

  handelChangePlace(e) {
    this.setState({place: e.target.value});
  }

  handelChangeDate(e) {
    this.setState({date: e.target.value});
  }

  handelChangeDescription(e) {
    this.setState({description: e.target.value});
  }

  handelChangeDocument(e) {
    this.setState({document: e.target.value});
  }

}

EventCreator.defaultProps = { title: '', date: '', max: '', place: '', description: '', document: ''};
