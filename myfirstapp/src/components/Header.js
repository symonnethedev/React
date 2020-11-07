import React from "react";
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div>
      <h1>My Bookcase</h1>
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
      <Link to="/bookcase" className="bookLink">
        Bookcase
      </Link>

    </div>
  );
};

export default Header;
 