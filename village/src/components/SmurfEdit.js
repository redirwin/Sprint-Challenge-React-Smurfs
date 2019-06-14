import React, { Component } from "react";

class SmurfEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSmurf: this.props.activeSmurf
    };
  }

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
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
  }
}

export default SmurfEdit;
