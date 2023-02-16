import React, { useState } from "react";
import ReactDOM from "react-dom";

//import nav dan render
import Nav from "./nav";
// import Header from "./header";

//buat fungsi untuk render
function render(content, id) {
  ReactDOM.render(content, document.getElementById(id));
}

//panggil JSX element
render(<Nav />, "nav");
// render(<Header />, "root");

//buat component
function App() {
  //set dan get name, job menggunakan useState
  const [input, setInput] = useState({ name: "", job: "" });

  //buat fungsi handleSubmit
  const handleSubmit = () => {
    //ambil value berdasarkan id pada input
    const name = document.getElementById("name").value;
    const job = document.getElementById("job").value;
    setInput({ name, job });
  };

  //render HTML
  return (
    <div>
      <div className="container">
        <div class="mb-3 w-50">
          <label class="form-label">Name</label>
          <input type="text" class="form-control" id="name" />
        </div>

        <div class="mb-3 w-50">
          <label class="form-label">Job</label>
          <input type="text" class="form-control" id="job" />
        </div>
        <button type="submit" value="submit" onClick={handleSubmit}>
          Submit
        </button>
        <h3 className="mt-5">Name : {input.name}</h3>
        <h3 className="mt-5">Job : {input.job}</h3>
      </div>
    </div>
  );
}

//render component App
const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
root.render(<App />);
