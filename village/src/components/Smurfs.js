import React, { Component } from "react";
import styled from "styled-components";

import Smurf from "./Smurf";

const SmurfDisplay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  max-width: 900px;
  margin: 5% auto;

  h1,
  h2 {
    margin: 0;
    padding: 0;
  }

  .smurf-cards-container {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    padding-top: 5%;

    .smurf-card {
      border: 1px solid black;
      padding: 2%;
      margin: 2%;
      width: 300px;
      background-color: #97ddf5;
      border-radius: 5px;
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);

      button {
        width: 100px;
        margin: 1%;
      }
    }
  }
`;

class Smurfs extends Component {
  render() {
    return (
      <SmurfDisplay>
        <h1>Welcome to Smurf Village</h1>
        <h2>Meet the Smurfs</h2>
        <div className="smurf-cards-container">
          {this.props.smurfs.map(smurf => {
            return (
              <div key={smurf.id} className="smurf-card">
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
        </div>
      </SmurfDisplay>
    );
  }
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
