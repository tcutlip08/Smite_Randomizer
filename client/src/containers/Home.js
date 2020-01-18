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
    team: [],
    random: ""
  };

  componentDidUpdate() {
    // console.log(this.state);
  }

  randomizeSingle() {
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
  randomizeJoust() {
    if (this.state.team.length < 3) {
      let randomclass = this.state.gods[
        Math.floor(Math.random() * this.state.gods.length)
      ];
      if (randomclass.checked) {
        axios
          .get("/api/gods/" + randomclass.class + "/random")
          .then(res => {
            let array = this.state.team;
            array.push(res.data);
            this.setState({ team: array });
            this.randomizeJoust();
          })
          .catch(err => {
            console.log(err);
          });
      }
    } else {
      this.setState({ random: this.state.team.join(" | "), team: [] });
      return;
    }
  }

  randomizeConquest() {
    if (this.state.team.length < 5) {
      let randomclass = this.state.gods[
        Math.floor(Math.random() * this.state.gods.length)
      ];
      if (randomclass.checked) {
        axios
          .get("/api/gods/" + randomclass.class + "/random")
          .then(res => {
            let array = this.state.team;
            array.push(res.data);
            this.setState({ team: array });
            this.randomizeConquest();
          })
          .catch(err => {
            console.log(err);
          });
      }
    } else {
      this.setState({ random: this.state.team.join(" | "), team: [] });
      return;
    }
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
          <div className="col" style={{ textAlign: "center", margin: "auto" }}>
            {this.state.random
              ? this.state.random
              : "Go on...click it! You know you want to"}
          </div>
        </div>
        <div className="row" style={{ paddingTop: "2em" }}>
          <div className="col" style={{ textAlign: "center", margin: "auto" }}>
            <button
              className="btn btn-secondary"
              onClick={() => this.randomizeJoust()}
            >
              Joust Team
            </button>
          </div>
          <div className="col" style={{ textAlign: "center", margin: "auto" }}>
            <button
              className="btn btn-secondary"
              onClick={() => this.randomizeSingle()}
            >
              Single God
            </button>
          </div>
          <div className="col" style={{ textAlign: "center", margin: "auto" }}>
            <button
              className="btn btn-secondary"
              onClick={() => this.randomizeConquest()}
            >
              Conquest Team
            </button>
          </div>
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
