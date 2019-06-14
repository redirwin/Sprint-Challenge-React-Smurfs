import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const NavWrapper = styled.div`
  with: 100%;
  display: flex;
  justify-content: center;
  background-color: #1e5799;

  @media (max-width: 300px) {
    flex-direction: column;
  }

  a {
    color: white;
    text-decoration: none;
    padding: 1%;
    width: 100px;
    font-size: 1.25rem;
    text-align: center;
    transition: background-color 0.3s;

    &:hover {
      background-color: #97ddf5;
      color: #1e5799;
    }

    @media (max-width: 300px) {
      width: 100%;
    }
  }
`;

class Navigation extends React.Component {
  render() {
    return (
      <NavWrapper>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/addsmurf">Add Smurf</NavLink>
      </NavWrapper>
    );
  }
}

export default Navigation;
