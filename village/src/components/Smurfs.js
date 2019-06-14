import React, { Component } from "react";

import Smurf from "./Smurf";

class Smurfs extends Component {
  render() {
    return (
      <div className="Smurfs">
        <h1>Welcome to Smurf Village</h1>
        <ul>
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id} className="smurf-list">
                <Smurf
                  name={smurf.name}
                  id={smurf.id}
                  age={smurf.age}
                  height={smurf.height}
                />
                <div className="card-edit-links">
                  <button onClick={e => this.props.setEditForm(e, smurf)}>
                    Edit
                  </button>
                  <button onClick={e => this.props.deleteSmurf(e, smurf)}>
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
