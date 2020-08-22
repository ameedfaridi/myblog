import React from "react";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="main-home">
      <div>
        <Navbar />
      </div>
      <div>
        <div className="home-content">
          <h1> Andrew Sullivan</h1>
          <h2>
            Blogging is to writing what extreme sports are to athletics: more
            free-form, more accident-prone, less formal, more alive. It is, in
            many ways, writing out loud.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
