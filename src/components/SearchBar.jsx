import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "./Card";

class SearchBar extends Component {
  render() {
    return (
      <div>
        <div className="search-main">
          <form className="search-form">
            <div className="font-div">
              <Link to="post" title="back to post">
                <FontAwesomeIcon icon={faArrowLeft} className="back-arrow" />
              </Link>
            </div>
            <input
              type="text"
              placeholder="Search..."
              onChange={(e) => this.props.query(e.target.value)}
              value={this.props.value}
            />
          </form>
        </div>
        <div className="search-card">
          <Card data={this.props.data} userID={this.props.userID} />
        </div>
      </div>
    );
  }
}

export default SearchBar;
