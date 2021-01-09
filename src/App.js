import React from "react";
import { Component } from "react";
import "./App.css";

export default class App extends Component {
  arrayOfData = () => {
    return ["Do Laundry", "Buy Grocery", "Wash Car"];
  };

  render() {
    return (
      <div className="App">
        {this.arrayOfData().map((data, key) => {
          return <p key={key}>{data}</p>;
        })}
      </div>
    );
  }
}
