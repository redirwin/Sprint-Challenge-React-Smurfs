import React, { Component } from "react";

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
    // console.log(this.state.activeSmurf);
    console.log("hello");
    console.log(this.props.activeSmurf);
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
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
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfEdit;
