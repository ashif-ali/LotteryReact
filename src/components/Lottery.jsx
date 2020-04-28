import React, { Component } from "react";
import Ball from "./Ball";
import "./Lottery.css";

class Lottery extends Component {
  static defaultProps = {
    title: "Lotto",
    numBalls: 6,
    maxNum: 40
  };

  state = {
    num: Array.from({ length: this.props.numBalls })
  };

  generateNums = () => {
    this.setState(st => ({
      num: st.num.map(n => Math.floor(Math.random() * this.props.maxNum) + 1)
    }));
  };

  handleClick = () => {
    this.generateNums();
  };

  render() {
    return (
      <section className="Lottery">
        <h1>{this.props.title}</h1>
        <div>
          {this.state.num.map(n => (
            <Ball num={n} />
          ))}
        </div>
        <button onClick={() => this.handleClick()}>Click here</button>
      </section>
    );
  }
}

export default Lottery;
