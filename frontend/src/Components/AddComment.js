import React, { useState } from "react";
import { Link } from "react-router-dom";

const AddComment = (props) => {
  const [value, setValue] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    let name = "John";
    let id = 3;
    console.log(value);
    props.commentHandler(name, value, id, props.id);
  };

  return (
    <div className="comments__public">
      <img
        className="header__profilePic"
        src="/Assets/Images/john_gibbons.jpg"
        alt="profile-pic"
      />
      <form className="comments__form" onSubmit={submitHandler}>
        <input
          className="comments__form--input"
          value={value}
          type="text"
          name="textInput"
          placeholder="Add a public comment"
          onChange={(e) => setValue(e.target.value)}
        />
        <div className="comments__form--button">
          {/* <Link to={`/videos/${props.id}/comments`}> */}
          <input
            className="comments__form--submit"
            type="submit"
            value="Comment"
          />
          {/* </Link> */}
        </div>
      </form>
    </div>
  );
};

export default AddComment;
