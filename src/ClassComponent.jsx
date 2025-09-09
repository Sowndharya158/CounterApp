import React, { Component } from "react";

export default class ClassComponent extends Component {
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
          <button onClick={this.props.handleIncrement}>+</button>
          <h5>{this.props.count}</h5>
          <button onClick={this.props.handleDecrement}>-</button>
        </div>
      </div>
    );
  }
}
