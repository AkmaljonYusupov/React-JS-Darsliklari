import React from "react";
import ReactDOM from "react-dom/client";
import "./index.jsx";
import "./index.css";
import State from "./State.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div>
      <State />
    </div>
  </React.StrictMode>
);
