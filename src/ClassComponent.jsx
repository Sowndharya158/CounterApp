import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrement = () => {
    if (this.state.count === 0) return;
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div className="container">
        <h2 style={{ color: "#18385c", margin: "2rem" }}>Class Component</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button onClick={this.handleIncrement}>+</button>
          <h5>{this.state.count}</h5>
          <button onClick={this.handleDecrement}>-</button>
        </div>
      </div>
    );
  }
}
