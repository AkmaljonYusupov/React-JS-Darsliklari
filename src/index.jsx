import React from "react";
import ReactDOM from "react-dom/client";
import "./index.jsx";
import "./index.css";
import { Data } from "./Data.jsx";
import Navbar from "./Navbar.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>list of fruits</h1>
    <span></span>
    <div className="container">
      {Data.map((value) => {
        return <Navbar title={value} />;
      })}
    </div>
  </React.StrictMode>
);
