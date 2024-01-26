import React from "react";
import Comment from "./Comment";

const CommentDisplay = (props) => {
  let mainVideo = props.currentVideo;
  if (mainVideo != null)
    return mainVideo.map((video, i) => {
      return (
        <Comment
          key={i}
          name={video.name}
          comment={video.comment}
          timestamp={video.timestamp}
        />
      );
    });
  else {
    return "empty";
  }
};

export default CommentDisplay;
