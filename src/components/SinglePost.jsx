import React from "react";
import Navbar from "./Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SinglePost = (props) => {
  return (
    <div className="main-single">
      <Link to="post" title="back to post">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="back-arrow"
          style={{ top: "0" }}
        />
      </Link>
      {props.data.map((post) => {
        return (
          <div key={post.id}>
            <div className="single-content">
              <h1>{post.title}</h1>
              <h2>{post.body}</h2>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SinglePost;
