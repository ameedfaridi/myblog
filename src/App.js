import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/SearchBar";
import Home from "./components/Home";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Post from "./components/Post";
import SinglePost from "./components/SinglePost";

class App extends Component {
  state = {
    data: [],
    query: "",
    singlePost: [],
  };

  componentDidMount = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((result) => {
        return this.setState({
          data: result,
        });
      })
      .catch((rej) => console.log(rej));
  };

  getQuery = (e) => {
    this.setState({
      query: e.trim(),
    });
  };

  getID = (e) => {
    const singlePost = this.state.data.filter((post) => post.id === e);
    this.setState({
      singlePost,
    });
  };

  render() {
    const { data, query, singlePost } = this.state;

    const filterResult = data.filter((post) => {
      return post.title.toLowerCase().includes(query.toLowerCase());
    });

    return (
      <div className="App">
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition classNames="item" key={location.key} timeout={400}>
                <Switch location={location}>
                  <Route
                    exact
                    path="/search"
                    render={() => (
                      <SearchBar
                        query={this.getQuery}
                        value={query}
                        data={filterResult}
                        userID={this.getID}
                      />
                    )}
                  />
                  <Route exact path="/" component={Home} />
                  <Route
                    exact
                    path="/post"
                    render={() => <Post data={data} userID={this.getID} />}
                  />
                  <Route exact path="/" component={Home} />
                  <Route
                    exact
                    path="/singlepost"
                    render={() => <SinglePost data={singlePost} />}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
      </div>
    );
  }
}

export default App;
