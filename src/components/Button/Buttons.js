import React, { Component } from "react";


class Button extends Component {
  state = {};
  render() {

const navigation = (destination) => {
        this.props.fnNav(destination);
      }
    return (
      <div>
        <button onClick={() => navigation(this.props.txt)}>{this.props.txt}</button>
      </div>
    );
  }
}

export default Button;
