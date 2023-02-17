import React from "react";
import ReactDOM from "react-dom";
import { faker } from "@faker-js/faker";
import "semantic-ui-css/semantic.min.css";

//import Component App
import App from "./App";

//buat variabel penyimpanan data
const data = [
  {
    name: faker.name.fullName(),
    image: faker.image.avatar(),
    post: faker.lorem.text(),
    createdDate: faker.date.recent().toLocaleString(),
  },
  {
    name: faker.name.fullName(),
    image: faker.image.avatar(),
    post: faker.lorem.text(),
    createdDate: faker.date.recent().toLocaleString(),
  },
  {
    name: faker.name.fullName(),
    image: faker.image.avatar(),
    post: faker.lorem.text(),
    createdDate: faker.date.recent().toLocaleString(),
  },
];

//render data
ReactDOM.render(<App data={data} />, document.getElementById("root"));
