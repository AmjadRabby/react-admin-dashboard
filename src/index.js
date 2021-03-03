import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminPanel from "./components/Dashboard/AdminPanel/AdminPanel";

ReactDOM.render(
  <React.StrictMode>
    <Dashboard />
  </React.StrictMode>,
  document.getElementById("root")
);
