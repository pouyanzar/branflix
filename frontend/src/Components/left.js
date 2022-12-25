import React, { Component } from "react";
import MainVideo from "./mainVideo";

class Left extends Component {
  render() {
    let mainVideo = this.props.currentVideo;
    return (
      <MainVideo
        title={mainVideo.title}
        views={mainVideo.views}
        thumbsUp={mainVideo.thumbsUp}
        thumbsDown={mainVideo.thumbsDown}
        channel={mainVideo.channel}
        subscriberCount={mainVideo.subscriberCount}
        video={mainVideo.video}
        comments={mainVideo.comments}
        id={mainVideo.id}
        commentHandler={this.props.commentHandler}
      />
    );
  }
}

export default Left;
