import React from "react";
import "./App.css";
import { Layout } from "./components/Layout/Layout";

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export const App = () => {
  return (
    <div className="App">
      <Layout />
    </div>
  );
};
