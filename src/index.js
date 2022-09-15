import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer";
import "./index";
import Navbar from "./Navbar";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Hello React</h1>
    <Navbar />
    <Footer />
  </React.StrictMode>
);
