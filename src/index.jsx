import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./Footer.jsx";
import "./index.jsx";
import Navbar from "./Navbar.jsx";

const data = [
  { name: "React", color: "red" },
  { name: "Html", color: "Yello" },
  { name: "css", color: "green" },
];

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <h1>Hello React</h1>

    {data.map((value) => {
      return <Navbar title={value} />;
    })}

    <Footer />
  </React.StrictMode>
);
