import React, { Component } from "react";

class SmurfAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      height: ""
    };
  }

  addSmurf = (e, newSmurf) => {
    event.preventDefault();
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });

    this.setState({
      name: "",
      age: "",
      height: ""
    });
  };

  handleAddChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form onSubmit={this.addSmurf}>
          <input
            onChange={this.handleAddChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleAddChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleAddChange}
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

export default SmurfAdd;
