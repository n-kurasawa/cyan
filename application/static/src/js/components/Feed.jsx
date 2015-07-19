import React from "react";
import FluxComponent from 'flummox/component';

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="feed panel panel-default col-md-7">
        <div className="panel-heading">
          フィード
        </div>
        <div className="panel-body">
          <input className="comment" type="text" placeholder="コメント" />
          <div className="btn_area">
            <button className="btn btn-default">投稿する</button>
          </div>
        </div>
      </div>
    );
  }
}
