import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  with: 100%;
  padding: 2% 0;
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
