import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Card from "./Card";

const Post = (props) => {
  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Card data={props.data} userID={props.userID} />
        </div>
        <Link to="search">
          <div className="s-icon-div" title="search">
            <FontAwesomeIcon
              icon={faSearch}
              className="S-icon"
            ></FontAwesomeIcon>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Post;
