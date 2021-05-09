import React, { Component } from "react";
import "./Keyboard.css";
import KeyBoardButton from "./KeyboardButton/KeyBoardButton";

class Keyboard extends Component {
  state = {
    operation: "",
    value: "",
    displayedValue: "0",
    waitingForOperand: false,
  };
  constructor(props) {
    super(props);
    this.props = props;
    this.handlClick.bind(this);
    // this.digintInput.bind(this);
  }

  handlClick = (e) => {
    console.log(e);
  };
  /**
   *
   * @param {string} dig
   */
  digintInput = (dig) => {
    const { displayedValue } = this.state;

    if (dig === ".") {
      if (!displayedValue.includes("."))
        this.setState({ displayedValue: displayedValue + dig });

      return;
    }
    this.setState({
      displayedValue:
        this.state.displayedValue === "0" || this.state.waitingForOperand
          ? dig.toString()
          : this.state.displayedValue + dig,
      waitingForOperand: false,
    });
  };
  /**
   *
   * @param {string} func
   */
  funcInput = (func) => {
    var str = this.state.displayedValue;
    var ans = this.state.value;
    if (func === "AC") {
      str = "0";
      ans = "";
    }
    if (func === "←") {
      str = str.length === 1 ? "0" : str.substring(0, str.length - 1);
    }
    if (func === "±") {
      str = str[0] === "-" ? str.substring(1, str.length) : "-" + str;
    }
    this.setState({
      value: ans,
      displayedValue: str,
    });
  };

  /**
   *
   * @param {string} op
   */
  operInput = (op) => {
    const { displayedValue, value, operation } = this.state;
    if (op == "=") {
      var aux = eval(value + operation + displayedValue);
      this.setState({
        displayedValue: Number.isInteger(aux) ? aux : aux.toFixed(3),
        value: "",
        waitingForOperand: false,
      });
      return;
    }
    this.setState({
      value: displayedValue,
      operation: op,
      waitingForOperand: true,
    });
  };
  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="calcDisplay">{this.state.displayedValue}</div>
        <div className="KeyBoardWrapper">
          <KeyBoardButton
            onClick={() => this.funcInput("AC")}
            buttStyle="btn-function"
            children="AC"
          />
          <KeyBoardButton
            onClick={() => this.funcInput("←")}
            buttStyle="btn-function"
            children="←"
          />
          <KeyBoardButton
            onClick={() => this.funcInput("±")}
            buttStyle="btn-function"
            children="±"
          />
          <KeyBoardButton
            onClick={() => this.operInput("/")}
            buttStyle="btn-operation"
            children="/"
          />

          <KeyBoardButton
            onClick={() => this.digintInput("7")}
            buttStyle="btn-number"
            children="7"
          />
          <KeyBoardButton
            onClick={() => this.digintInput("8")}
            buttStyle="btn-number"
            children="8"
          />
          <KeyBoardButton
            onClick={() => this.digintInput("9")}
            buttStyle="btn-number"
            children="9"
          />
          <KeyBoardButton
            onClick={() => this.operInput("*")}
            buttStyle="btn-operation"
            children="X"
          />

          <KeyBoardButton
            onClick={() => this.digintInput("4")}
            buttStyle="btn-number"
            children="4"
          />
          <KeyBoardButton
            onClick={() => this.digintInput("5")}
            buttStyle="btn-number"
            children="5"
          />
          <KeyBoardButton
            onClick={() => this.digintInput("6")}
            buttStyle="btn-number"
            children="6"
          />
          <KeyBoardButton
            onClick={() => this.operInput("-")}
            buttStyle="btn-operation"
            children="-"
          />

          <KeyBoardButton
            onClick={() => this.digintInput("1")}
            buttStyle="btn-number"
            children="1"
          />
          <KeyBoardButton
            onClick={() => this.digintInput("2")}
            buttStyle="btn-number"
            children="2"
          />
          <KeyBoardButton
            onClick={() => this.digintInput("3")}
            buttStyle="btn-number"
            children="3"
          />
          <KeyBoardButton
            onClick={() => this.operInput("+")}
            buttStyle="btn-operation"
            children="+"
          />
          <KeyBoardButton
            onClick={() => this.digintInput("0")}
            buttStyle="btn-number"
            buttSize="btn-large"
            children="0"
          />
          <KeyBoardButton
            onClick={() => this.digintInput(".")}
            buttStyle="btn-number"
            children="."
          />
          <KeyBoardButton
            onClick={() => this.operInput("=")}
            buttStyle="btn-operation"
            children="="
          />
        </div>
      </div>
    );
  }
}

export default Keyboard;
