import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  with: 100%;
  padding: 2% 0;
  background-color: #1e5799; // Old browsers
  @include filter-gradient(#1e5799, #7db9e8, horizontal); // IE6-9
  @include background-image(linear-gradient(left, #1e5799 0%, #7db9e8 36%));

  a {
    color: white;
    text-decoration: none;
    padding: 0 2%;
    font-size: 1.25rem;
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <NavWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addsmurf">Add a Smurf</NavLink>
      </NavWrapper>
    );
  }
}

export default Navigation;
