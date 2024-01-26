import { Link } from "react-router-dom";

export default AddComment = (props) => {
  const [comment, setComment] = setState(props.comment);
  changeHandler = (e) => {
    e.preventDefault();
    let name = "John";
    let id = 3;
    props.commentHandler(name, e.target.value, id, props.id);
  };

  return (
    <div className="comments__public">
      <img
        className="header__profilePic"
        src="/Assets/Images/john_gibbons.jpg"
        alt="profile-pic"
      />
      <form className="comments__form" onSubmit={changeHandler}>
        <input
          className="comments__form--input"
          value={comment}
          type="text"
          name="textInput"
          placeholder="Add a public comment"
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="comments__form--button">
          <button className="comments__form--cancel">Cancel</button>
          <Link to={`/videos/${props.id}/comments`}>
            <input
              className="comments__form--submit"
              type="submit"
              value="Comment"
            />
          </Link>
        </div>
      </form>
    </div>
  );
};
