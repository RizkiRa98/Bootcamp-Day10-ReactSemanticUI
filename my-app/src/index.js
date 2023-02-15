import React from "react";
import ReactDOM from "react-dom";

//import nav dan render
import Nav from "./nav";
import Header from "./header";

//buat fungsi untuk render
function render(content, id) {
  ReactDOM.render(content, document.getElementById(id));
}

//panggil fungsi
render(<Nav />, "nav");
render(<Header />, "root");
