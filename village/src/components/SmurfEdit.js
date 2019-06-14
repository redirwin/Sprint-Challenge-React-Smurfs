import React, { Component } from "react";
import styled from "styled-components";

const SmurfContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;
  padding: 5%;

  form {
    display: flex;
    flex-direction: column;

    input,
    button {
      padding: 1%;
      margin: 1%;
    }
  }
`;

class SmurfEdit extends Component {
  state = {
    activeSmurf: this.props.activeSmurf
  };

  handleEditChange = e => {
    e.preventDefault();
    e.persist();
    this.setState(prevState => ({
      activeSmurf: {
        ...prevState.activeSmurf,
        [e.target.name]: e.target.value
      }
    }));
  };

  handleEditSubmit = e => {
    e.preventDefault();
    const editedSmurf = {
      name: this.state.activeSmurf.name,
      age: this.state.activeSmurf.age,
      height: this.state.activeSmurf.height,
      id: this.state.activeSmurf.id
    };
    this.props.editSmurf(e, editedSmurf);
  };

  render() {
    return (
      <SmurfContainer>
        <form onSubmit={this.handleEditSubmit}>
          <input
            onChange={this.handleEditChange}
            placeholder="name"
            value={this.state.activeSmurf.name}
            name="name"
          />
          <input
            onChange={this.handleEditChange}
            placeholder="age"
            value={this.state.activeSmurf.age}
            name="age"
          />
          <input
            onChange={this.handleEditChange}
            placeholder="height"
            value={this.state.activeSmurf.height}
            name="height"
          />
          <button type="submit">Save Changes</button>
        </form>
      </SmurfContainer>
    );
  }
}

export default SmurfEdit;
