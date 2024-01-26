import React from "react";
import MainVideo from "./mainVideo";

const Left = (props) => {
  let mainVideo = props.currentVideo;
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
      commentHandler={props.commentHandler}
    />
  );
};

export default Left;
