import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./custom.scss";
import "bootstrap/dist/css/bootstrap.css";
import "swiper/css/bundle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
