import React from "react";
import FluxComponent from 'flummox/component';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.props.flux.getActions('feed').fetchAll(this.props.event_id);
    this.state = {
      comment: props.comment
    };
  }

  render() {
    var feeds = this.props.feeds;

    var items = [];
    feeds.forEach((feed)=> {
      items.push(
        <FeedItem feedItem={feed} />
      );
    });

    return (
      <div className="feed panel panel-default col-md-7">
        <div className="panel-heading">
          フィード
        </div>
        <div className="panel-body">
          <input className="comment" type="text" value={this.state.comment} placeholder="コメント" onChange={this.handelChangeComment.bind(this)}/>
          <div className="btn_area">
            <button className="btn btn-default" onClick={this.handleSubmit.bind(this)}>投稿する</button>
          </div>
        </div>
        <ul className="list-group">
          {items}
        </ul>
      </div>
    );
  }

  handleSubmit() {
    this.props.flux.getActions('feed').createFeed(this.state.comment, this.props.event_id);
    this.setState({ comment: ''})

  }

  handelChangeComment(e) {
    this.setState({comment: e.target.value});
  }
}
Feed.defaultProps = { comment: ''};

class FeedItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var date = this.props.feedItem.inserted_at.replace('T', ' ').replace('Z', '');

    return (
      <li className="list-group-item feedItem">
        <div><span className="user">{this.props.feedItem.user.name}</span>　<span className="date">{date}</span></div>
        {this.props.feedItem.content}
      </li>
    );
  }

}
