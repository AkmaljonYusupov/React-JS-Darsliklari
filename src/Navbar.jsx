import React, { Component } from "react";
import "./index.css";
import "./navbar.css";

class Navbar extends Component {
  render() {
    console.log(this);
    return (
      <div className="box">
        <img src={this.props.title.img} alt="rasmlar" />
        <h2>{this.props.title.name}</h2>
      </div>
    );
  }
}

export default Navbar;
