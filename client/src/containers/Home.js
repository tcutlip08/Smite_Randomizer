import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Logo from "../assets/SmiteLogo.png";
import axios from "axios";

class Home extends Component {
  state = {
    hunter: true,
    mage: true,
    assassin: true,
    warrior: true,
    guardian: true
  };

  randomize() {
    axios
      .get("/api/gods/Guardian/random")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  render() {
    return (
      <div className="container">
        <div
          className="jumbotron"
          style={{ textAlign: "center", margin: "auto" }}
        >
          <img src={Logo} alt="Smite Logo" style={{ width: "50%" }} />
        </div>

        <div className="row" style={{ paddingTop: "2em" }}>
          <div className="col"></div>
          <div className="col" style={{ textAlign: "center", margin: "auto" }}>
            <button
              className="btn btn-secondary"
              onClick={() => this.randomize()}
            >
              Randomize
            </button>
          </div>
          <div className="col"></div>
        </div>
      </div>
    );
  }
}

export default Home;
