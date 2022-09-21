import React, { Component } from "react";
// import "./table.css";
import data from "../data.jsx";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      surname: "",
      status: "",
      student: data,
      onesearch: "",
    };
  }
  render() {
    const onChange = (event) => {
      console.log(event);
      const { value, name } = event.target;
      this.setState({ [name]: value });
    };

    // Search... func
    const onSearch = (event) => {
      const { value } = event.target;
      this.setState({ onesearch: value });
      const res = data.filter(({ id, name, status }) =>
        name.toLowerCase().includes(value.toLowerCase())
      );
      this.setState({ student: res });
    };

    return (
      <div className="container mb-3 bg-primary mt-5 rounded-3 ">
        <div className="container px-5">
          <h3 className="text-white pt-5">
            Name: <span className="text-dark">{this.state.name}</span>
          </h3>
          <h3 className="text-white pt-4">
            Surname: <span className="text-dark">{this.state.surname}</span>
          </h3>
          <h3 className="text-white pb-5 pt-4">
            Status: <span className="text-dark">{this.state.status}</span>
          </h3>
        </div>
        <form action="POST">
          <input
            name="name"
            type="text"
            class="form-control"
            placeholder="Name"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
          <br />
          <input
            name="surname"
            type="text"
            placeholder="Surname"
            class="form-control"
            onChange={onChange}
          />
          <br />
          <input
            name="status"
            type="text"
            placeholder="Status"
            class="form-control"
            onChange={onChange}
          />
          <button
            type="submit"
            class="btn btn-primary bg-info mt-5 mb-5 btn-lg "
          >
            YUPORISH
          </button>
        </form>
        <hr />
        <h4>CRUD: C: create, R: read, U: update, D: delete</h4>
        <hr />
        <div className="container pb-5">
          <h1>Qidiruv bo`limi</h1>
          <input
            name="status"
            type="text"
            placeholder="Search..."
            class="form-control mb-5 mt-4"
            onChange={onSearch}
          />
          <h3>Search: {this.state.onesearch}</h3>
          <h3>Number of student: {this.state.student.length}</h3>
          {this.state.student.map(({ id, name, status }) => {
            return (
              <div className="container">
                <div className="row p-2">
                  <div className="col">
                    <ul className="list-unstyled text-white">
                      <li className="student">{id}</li>
                      <li className="student">{name}</li>
                      <li className="student">{status}</li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Table;

// const onNameChange = (event) => {
//   const { value } = event.target;
//   console.log(event.target.value);
//   this.setState({ name: value });
// };
// const onSurnameChange = (event) => {
//   const { value } = event.target;
//   console.log(event.target.value);
//   this.setState({ surname: value });
// };
// const onStatusChange = (event) => {
//   const { value } = event.target;
//   console.log(event.target.value);
//   this.setState({ status: value });
// };
