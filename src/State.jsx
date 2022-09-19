import React from "react";
import "./index.css";

class State extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      son: 1,
      title: "",
    };
  }

  render() {
    const plus = () => {
      console.log("plussss");
      this.setState({ son: this.state.son + 1 });
    };

    const minus = () => {
      console.log("minussss");
      if (this.state.son > 0) {
        this.setState({ son: this.state.son - 1 });
      }
    };

    const getName = (event) => {
      console.log(event.target.value);
      this.setState({ title: event.target.value });
    };

    const selectLanguage = (event) => {
      console.log(event.target.value, "select Language");
    };

    console.log(this);
    return (
      <dir>
        <div className="btn__items">
          <button onClick={plus} title="plus">
            +
          </button>
          <h1>{this.state.son}</h1>
          <button onClick={minus} title="minus">
            -
          </button>
        </div>
        <div className="input__items">
          <input
            type="text"
            placeholder="Name"
            onChange={getName}
            title="Ma`lumot kiriting"
          />
          <select onChange={selectLanguage}>
            <option value={"uz"}>uz</option>
            <option value={"ru"}>ru</option>
            <option value={"en"}>en</option>
          </select>
        </div>
        <p>{this.state.title}</p>
      </dir>
    );
  }
}
export default State;
