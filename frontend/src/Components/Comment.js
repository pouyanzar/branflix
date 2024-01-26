import React from "react";
import Timestamp from "react-timestamp";

const Comment = (props) => {
  return (
    <section className="comments">
      <p className="comments__name">
        {props.name}
        <span className="comments__time">
          <Timestamp>{props.timestamp}</Timestamp>
        </span>
      </p>
      <p className="comments__comment">{props.comment}</p>
    </section>
  );
};
export default Comment;
