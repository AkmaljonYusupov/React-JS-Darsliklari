import React, { Component } from "react";
import "./buuton.css";

export default class Buuton extends Component {
  render() {
    console.log(this.props.title);
    return <div className="container"> {this.props.title} </div>;
  }
}
