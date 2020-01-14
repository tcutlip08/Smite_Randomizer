import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Logo from "../assets/SmiteLogo.png";
import axios from "axios";

class Home extends Component {
  state = {
    gods: [
      { class: "Guardian", checked: true },
      { class: "Warrior", checked: true },
      { class: "Assassin", checked: true },
      { class: "Mage", checked: true },
      { class: "Hunter", checked: true }
    ]
  };

  componentDidUpdate() {
    console.log(this.state);
  }

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

  changeCheckBox = event => {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked
    });
  };
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
        <div className="row">
          <div className="col">
            <input
              type="checkbox"
              name="guardian"
              defaultChecked={this.state.gods[0].checked}
              onChange={this.changeCheckBox}
            />
            <span className="class">Guardian</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="checkbox"
              name="warrior"
              defaultChecked={this.state.gods[1].checked}
              onChange={this.changeCheckBox}
            />
            <span className="class">Warrior</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="checkbox"
              name="assassin"
              defaultChecked={this.state.gods[2].checked}
              onChange={this.changeCheckBox}
            />
            <span className="class">Assassin</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="checkbox"
              name="mage"
              defaultChecked={this.state.gods[3].checked}
              onChange={this.changeCheckBox}
            />
            <span className="class">Mage</span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <input
              type="checkbox"
              name="hunter"
              defaultChecked={this.state.gods[4].checked}
              onChange={this.changeCheckBox}
            />
            <span className="class">Hunter</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
