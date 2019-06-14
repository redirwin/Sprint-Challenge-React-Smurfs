import React, { Component } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import "./App.scss";
import SmurfAdd from "./components/SmurfAdd";
import SmurfEdit from "./components/SmurfEdit";
import Smurfs from "./components/Smurfs";
import Navigation from "./components/Navigation";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
      activeFriend: ""
    };
  }

  addSmurf = newSmurf => {
    axios
      .post("http://localhost:3333/smurfs", newSmurf)
      .then(response => {
        this.setState({
          smurfs: response.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  setEditForm = (e, smurf) => {
    e.preventDefault();
    // console.log(smurf.id);
    this.setState({
      activeSmurf: smurf
    });
    this.props.history.push(`/editsmurf/${smurf.id}`);
  };

  editSmurf = (e, editedSmurf) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3333/smurfs/${editedSmurf.id}`, editedSmurf)
      .then(res => {
        this.setState({
          activeSmurf: "",
          smurfs: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  deleteSmurf = (e, deletedSmurf) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:3333/smurfs/${deletedSmurf.id}`, deletedSmurf)
      .then(res => {
        this.setState({
          activeSmurf: "",
          smurfs: res.data
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
    // console.log(this.state.smurfs);
    return (
      <div className="App">
        <Navigation />
        <Route
          exact
          path="/"
          render={props => (
            <Smurfs
              {...props}
              smurfs={this.state.smurfs}
              setEditForm={this.setEditForm}
              deleteSmurf={this.deleteSmurf}
            />
          )}
        />
        <Route
          exact
          path="/addsmurf"
          render={props => <SmurfAdd {...props} addSmurf={this.addSmurf} />}
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
