import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
  }

  submitHandler = (e) => {
    e.preventDefault();
    let name = "John";
    let id = 3;
    console.log(this.state.value);
    this.props.commentHandler(name, this.state.value, id, this.props.id);
  };

  changeHandler = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <div className="comments__public">
        <img
          className="header__profilePic"
          src="/Assets/Images/john_gibbons.jpg"
          alt="profile-pic"
        />
        <form className="comments__form">
          <input
            className="comments__form--input"
            value={this.state.value}
            type="text"
            name="textInput"
            placeholder="Add a public comment"
            onChange={this.changeHandler}
          />
          <div className="comments__form--button">
            {/* <button className="comments__form--cancel">Cancel</button> */}
            <Link to={`/videos/${this.props.id}/comments`}>
              <button
                className="comments__form--submit"
                type="submit"
                onClick={this.submitHandler}
              >
                Comment
              </button>
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
