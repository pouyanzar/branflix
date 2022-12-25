import React, { Component } from "react";
import "./App.css";
import Header from "./Components/header";
import Upload from "./Components/Upload";
import Main from "./Components/Main";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import AddComment from "./Components/AddComment";

let baseUrl = "https://branflix-server.herokuapp.com";

class App extends Component {
  state = {
    videos: [],
    mainVideo: {
      id: 0,
      title: "Toronto Blue Jays vs Boston Red Sox Highlights || July 14, 2018",
      description:
        "The Red Sox looked like they were about to lose this one, trailing by a run heading into the 9th, but back-to-back doubles by Xander Bogaerts and Jackie Bradley Jr. tied the game at 2 a piece. While Boston couldn't end it in the 9th, the 10th was a different story. Mookie Betts reached on an error by Lourdes Gurriel Jr., and after a single by Brock Holt and an intentional walk to JD Martinez, the stage was set for Bogaerts with the bases loaded. He took full advantage of the situation, hitting a grand slam to walk it off for the Red Sox, and to take the game by a final score of 6-2.",
      channel: "MLB",
      views: "14934",
      duration: "11:31",
      image: "https://i.imgur.com/3WPEmCJ.jpeg",
      video: "https://project-2-api.herokuapp.com/stream",
      thumbsUp: 78634,
      thumbsDown: 213,
      subscriberCount: "1.2M",
      comments: [
        {
          name: "Nigel",
          comment: "Never gonna give you up...",
          id: 0,
          timestamp: 1530744338878,
        },
        {
          name: "Ian",
          comment: "You could make $5000 a day too!",
          id: 1,
          timestamp: 1530744338878,
        },
      ],
    },
  };
  componentDidMount() {
    let query = "/videos";

    let promise = fetch(
      baseUrl + query + "?api_key=c1a04dd4-7ee0-41b1-9822-b92dcec3b769"
    );
    promise
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        return this.setState({ videos: data });
      });
  }

  handleIdChange = (id) => {
    fetch(
      `${baseUrl}/videos/${id}?api_key=c1a04dd4-7ee0-41b1-9822-b92dcec3b769`
    )
      .then((response) => {
        return response.json();
      })
      .then((video) => {
        return this.setState({ mainVideo: video });
      });
  };

  onCommentChange = (name, comment, commentId, id) => {
    let init = {
      method: "POST",
      body: JSON.stringify({ name: name, comment: comment, id: commentId }),
      headers: { "Content-Type": "application/json" },
    };

    fetch(
      `${baseUrl}/videos/${id}/comments?api_key=c1a04dd4-7ee0-41b1-9822-b92dcec3b769`,
      init
    )
      .then((res) => res.json())
      .then((res2) => {
        console.log(res2);
      });

    fetch(
      `${baseUrl}/videos/${id}?api_key=c1a04dd4-7ee0-41b1-9822-b92dcec3b769`
    )
      .then((response) => {
        return response.json();
      })
      .then((video) => {
        return this.setState({ mainVideo: video });
      });
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route
                path="/videos/:id"
                render={() => (
                  <Main
                    onIdChange={this.handleIdChange}
                    commentHandler={this.onCommentChange.bind(this)}
                    {...this.state}
                  />
                )}
              />
              <Route
                path="/videos/:id/comments"
                render={() => <AddComment />}
              />
              <Route path="/Upload" component={Upload} />
              <Route path="/" render={() => <Redirect to={"/videos/0"} />} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
