import React, { Component } from "react";
import styled from "styled-components";

const SmurfAddContainer = styled.div`
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

class SmurfAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  handleAddChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleAddSubmit = e => {
    e.preventDefault();
    const newSmurf = {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    };
    this.props.addSmurf(newSmurf);
  };

  render() {
    return (
      <SmurfAddContainer>
        <form onSubmit={this.handleAddSubmit}>
          <input
            onChange={this.handleAddChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleAddChange}
            placeholder="age in smurf years"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleAddChange}
            placeholder="height in centimeters"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add smurf to village</button>
        </form>
      </SmurfAddContainer>
    );
  }
}

export default SmurfAdd;
