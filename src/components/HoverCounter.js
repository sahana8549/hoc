import React, { Component } from "react";
import withCounter from "./withCounter";
import "./HoverCounter.css";

class HoverCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;

    return (
      <div>
        <button className="button1" onMouseOver={incrementCount}>
          <span>Hovered {count} times</span>
        </button>
      </div>
    );
  }
}
export default withCounter(HoverCounter);
