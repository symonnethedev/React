import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <React.Fragment>
      <Link to="/">Home</Link>
      <div>
        <h2>Welcome to the Bookcase App</h2>
        <p>Discover a list of books that you can save to a local bookcase </p>
        <p>
          Simply add or remove books to and from you bookcase at a click of a
          button
        </p>
        <p>
          Use the search bar to locate a book of your choice by seaching the
          title, author or description
        </p>
      </div>
    </React.Fragment>
  );
};
export default About;