import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.css";
import SmurfAdd from "./components/SmurfAdd";
import SmurfEdit from "./components/SmurfEdit";
import Smurfs from "./components/Smurfs";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: []
    };
  }

  addSmurf = newSmurf => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.setState({
          friends: response.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  setEditForm = (e, smurf) => {
    e.preventDefault();
    this.setState({
      activeSmurf: smurf
    });
    this.props.hisotry.push(`/edtismurf/${smurf.id}`);
  };

  editSmurf = (e, editedSmurf) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${editedSmurf.id}`, editedSmurf)
      .then(res => {
        this.setState({
          activeFriend: "",
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

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

  render() {
    return (
      <div className="App">
        <Navigation />
        <Route
          exact
          path="/"
          render={props => <Smurfs {...props} smurfs={this.state.smurfs} />}
        />
        <Route
          exact
          path="/addsmurf"
          render={props => (
            <SmurfAdd
              {...props}
              // smurfs={this.state.smurfs}
              addSmurf={this.addSmurf}
            />
          )}
        />
        <Route
          exact
          path="/editsmurf/:id"
          render={props => (
            <SmurfEdit
              {...props}
              activeSmurf={this.state.activeSmurf}
              editSmurf={this.editSmurf}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
