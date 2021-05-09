import React, { Component } from "react";

import "./KeyBoardButton.css";
class KeyBoardButton extends Component {
  state = {
    STYLE: ["btn-number", "btn-function", "btn-operation"],
    SIZE: ["btn-medium", "btn-large"],
  };
  constructor(props) {
    super(props);
    // this.props.onClick.bind(this);
  }

  render() {
    var { buttStyle, buttSize, onClick } = this.props;

    buttStyle = this.state.STYLE.includes(buttStyle)
      ? buttStyle
      : this.state.STYLE[0];
    buttSize = this.state.SIZE.includes(buttSize)
      ? buttSize
      : this.state.SIZE[0];

    return (
      <button onClick={onClick} className={`${buttStyle} ${buttSize}`}>
        {this.props.children}
      </button>
    );
  }
}

export default KeyBoardButton;
