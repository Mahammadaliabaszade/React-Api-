import React from "react";
import "./App.scss";
import Countries from "./components/Countries";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.scss";
import Header from "./components/Header";
import Country from "./components/Country";
import Filter from "./components/Filter";
//import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <>
        <Header />

        <Route exact path="/">
          <Filter />
          <Countries />
        </Route>
        <Route path="/countries/:name" children={<Country />}></Route>
      </>
    </Router>
  );
}

export default App;
