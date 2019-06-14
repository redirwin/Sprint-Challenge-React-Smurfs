import React from "react";
import { Route, NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav-links-container">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/smurfadd">Add a Smurf</NavLink>
      </div>
    );
  }
}

export default Navigation;
