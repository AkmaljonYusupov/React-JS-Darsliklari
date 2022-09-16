import React, { Component } from "react";

class Navbar extends Component {
  render() {
    console.log(this.props.title.name);
    return (
      <div>
        <p>
          Name: {this.props.title.name}
          <br />
          Color: {this.props.title.color}
        </p>
      </div>
    );
  }
}
export default Navbar;
