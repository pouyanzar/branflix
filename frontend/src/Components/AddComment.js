import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AddComment extends Component {


    changeHandler = (e) => {

        e.preventDefault();
        let name = "John";
        let id = 3
        this.props.commentHandler(name,e.target.value, id, this.props.id);
    }
    
  render() {
    return (
      <div className="comments__public">
         <img className="header__profilePic" src="/Assets/Images/john_gibbons.jpg" alt="profile-pic"/>
         <form className="comments__form">
        <input className="comments__form--input"
            value={this.props.comment}
            type="text"
            name="textInput"
            placeholder="Add a public comment"
            onChange={this.changeHandler} />
        <div className="comments__form--button">    
            <button className="comments__form--cancel">Cancel</button>
            <Link to={`/videos/${this.props.id}/comments`}><input className="comments__form--submit" type="submit" value="Comment" /></Link>
        </div>
      </form>

      </div>
    )
  }
}
