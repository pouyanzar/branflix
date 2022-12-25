import React, { Component } from "react";
import Left from "./left";
import Sidebar from "./Sidebar";
import { withRouter } from "react-router-dom";

class Main extends Component {
  componentDidUpdate(prevProp, preState) {
    if (prevProp.match.params.id !== this.props.match.params.id) {
      this.props.onIdChange(this.props.match.params.id);
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Left
          currentVideo={this.props.mainVideo}
          commentHandler={this.props.commentHandler}
        />
        <div className="left-wrapper">
          <Sidebar videoArray={this.props.videos} />
        </div>
      </div>
    );
  }
}

export default withRouter(Main);
