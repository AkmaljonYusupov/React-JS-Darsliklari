import React, { Component } from "react";
import "./table.css";
import data from "../data.jsx";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataApi: data,
      search: "",
      select: "id",
      name: "",
    };
  }

  render() {
    // Search function
    const onSearch = (event) => {
      const { value } = event.target;
      const res = data.filter((item) =>
        item[this.state.select]
          .toString()
          .toLowerCase()
          .includes(value.toLowerCase())
      );
      this.setState({ dataApi: res });
    };
    // Select tanlash funcsiyasi
    const onSelect = (event) => {
      const { value } = event.target;
      this.setState({ select: value });
    };
    // data Add function

    const onEnter = (event) => {
      const { value } = event.target;
      this.setState({ name: value });
    };
    const onAdd = () => {
      const newUser = {
        id: this.state.dataApi.length + 1,
        name: this.state.name,
      };
      this.setState({
        dataApi: [...this.state.dataApi, newUser],
        name: "",
      });
    };

    // Delete Funktion
    const onDelete = (id) => {
      let res = this.state.dataApi.filter((value) => value.id !== id);
      this.setState({ dataApi: res });
    };

    const onLike = (name) => {
      // let res = this.state.dataApi.filter((value) => value.name !== name);
      // this.setState({dat})
      console.log("Red");
    };

    return (
      <div className="container mt-5 col-6 alert alert-primary">
        <div className="row">
          <div className="col">
            <h3 className="title">WebBrain Academy</h3>
          </div>
          <div className="col">
            <h3 className="title" align="right">
              Number of data: {this.state.dataApi.length}
            </h3>
          </div>
        </div>
        <div className="row">
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              placeholder="Search . . ."
              onChange={onSearch}
            />
          </div>
          <div className="col-2">
            <select onChange={onSelect} className="form-select">
              <option value="id">ID</option>
              <option value="name">Name</option>
            </select>
          </div>
        </div>
        <div className="container  mt-3">
          <table className="table table-striped table-hover">
            <tbody>
              {this.state.dataApi.length ? (
                this.state.dataApi.map(({ id, name }) => {
                  return (
                    <tr>
                      <td className="col-2 h4">{id}</td>
                      <td className="col-8 h4">{name}</td>
                      <td className="col-1" id="icons_ico">
                        <i
                          onClick={() => onDelete(id)}
                          className="bi bi-trash3"
                        ></i>
                      </td>
                      <td className="col-1" id="icons_ico">
                        <i className="bi bi-pen"></i>
                      </td>
                      <td className="col-1" id="icons_ico">
                        <i
                          className="bi bi-heart-fill"
                          onClick={() => onLike(name)}
                        ></i>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <h4>No Data</h4>
              )}
            </tbody>
          </table>
          <div className="container">
            <div className="row">
              <div className="col-9">
                <input
                  value={this.state.name}
                  type="text"
                  className="form-control"
                  onChange={onEnter}
                  placeholder="Enter a title"
                  required
                />
              </div>
              <div className="col-3">
                <button
                  type="button"
                  className="btn btn-info col-12"
                  onClick={onAdd}
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Table;
