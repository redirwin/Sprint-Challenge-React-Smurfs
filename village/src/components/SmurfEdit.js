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
    return (
      <div className="edit-smurf-container">
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
      </div>
    );
  }
}

export default SmurfEdit;
