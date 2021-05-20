import React, { Component } from "react";
import withCounter from "./withCounter";
import "./ClickCounter.css";
class ClickCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return (
      <button className="button2" onClick={incrementCount}>
        Clicked {count} times
      </button>
    );
  }
}
export default withCounter(ClickCounter);
