import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import SmurfAdd from "./components/SmurfAdd";
import SmurfEdit from "./components/SmurfEdit";
import Smurfs from "./components/Smurfs";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3333/smurfs")
      .then(response => {
        this.setState(() => ({ smurfs: response.data }));
      })
      .catch(error => {
        console.error("Server Error", error);
      });
  }

  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    console.log(this.state.smurfs);

    return (
      <div className="App">
        <Smurfs smurfs={this.state.smurfs} />
        <SmurfAdd />
        <SmurfEdit />
      </div>
    );
  }
}

export default App;
