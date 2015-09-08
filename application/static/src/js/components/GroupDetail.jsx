import React from "react";

export default class GroupDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let group = this.props.group;
    if (group) {
      var name = group.name;
      var owner = group.owner.name;
      var description = group.description;
    }

    return (
      <div className="groupDetail panel panel-default col-md-7">
        <div className="panel-heading">
          <div className="item-head">
            <div className="userName">オーナー: {owner}</div>
          </div>
          <div className="title">{name}</div>
        </div>
        <div className="panel-body">
          <div className="item-detail description">
            <div className="item-detail-head">詳細</div>
            {description}
          </div>
        </div>
      </div>
    );
  }
}
