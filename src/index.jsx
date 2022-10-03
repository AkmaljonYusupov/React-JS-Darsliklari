import React from "react";
import ReactDOM from "react-dom/client";
import Edit from "./Edit";
import "./index";
import Table from "./Table/Table";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Table />
    <Edit />
  </React.StrictMode>
);
