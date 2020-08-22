import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { faThumbsDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class Card extends Component {
  UbtnClicked = (e) => {
    document.getElementById(`${e}U`).classList.toggle("thumbs1");
    if (document.getElementById(`${e}D`).classList.contains("thumbs1")) {
      document.getElementById(`${e}D`).classList.remove("thumbs1");
    }
  };

  DbtnClicked = (e) => {
    document.getElementById(`${e}D`).classList.toggle("thumbs1");
    if (document.getElementById(`${e}U`).classList.contains("thumbs1")) {
      document.getElementById(`${e}U`).classList.remove("thumbs1");
    }
  };

  render() {
    return (
      <div className="card-body">
        <div className="container">
          {this.props.data.map((post) => {
            return (
              <div key={post.id}>
                <div className="card">
                  <div className="content">
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                  </div>
                  <div className="react-container">
                    <div className="react-to-post">
                      <button
                        className="Btn"
                        onClick={() => this.UbtnClicked(post.id)}
                      >
                        <FontAwesomeIcon
                          icon={faThumbsUp}
                          className="thumbs"
                          id={`${post.id}U`}
                        />
                      </button>
                      <Link
                        to="/singlepost"
                        className="read-btn"
                        onClick={() => this.props.userID(post.id)}
                      >
                        Read More
                      </Link>
                      <button
                        className="Btn"
                        onClick={() => this.DbtnClicked(post.id)}
                      >
                        <FontAwesomeIcon
                          icon={faThumbsDown}
                          className="thumbs"
                          id={`${post.id}D`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Card;
