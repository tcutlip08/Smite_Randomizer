import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Logo from "../assets/SmiteLogo.png";
import CheckBox from "../components/CheckBox/CheckBox";
import axios from "axios";

class Home extends Component {
  state = {
    gods: [
      { class: "Guardian", checked: true },
      { class: "Warrior", checked: true },
      { class: "Assassin", checked: true },
      { class: "Mage", checked: true },
      { class: "Hunter", checked: true }
    ],
    random: ""
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  randomize() {
    let array = [];
    for (let i = 0; i < this.state.gods.length; i++) {
      if (this.state.gods[i].checked) {
        array.push(this.state.gods[i].class);
      }
    }

    axios
      .get(
        "/api/gods/" +
          array[Math.floor(Math.random() * array.length)] +
          "/random"
      )
      .then(res => {
        this.setState({ random: res.data });
      })
      .catch(err => {
        console.log(err);
      });
  }

  changeCheckBox = event => {
    const { name, checked } = event.target;
    for (let i = 0; i < this.state.gods.length; i++) {
      if (name === this.state.gods[i].class) {
        let array = this.state.gods;
        array[i].checked = !array[i].checked;
        this.setState({ gods: array });
        return;
      }
    }
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
            {this.state.random
              ? this.state.random
              : "Go on...click it! You know you want to"}
          </div>
          <div className="col"></div>
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
          {this.state.gods.map(array => {
            return (
              <CheckBox
                class={array.class}
                checked={array.checked}
                changeCheckBox={this.changeCheckBox}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
