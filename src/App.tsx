import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience.lazy";
import Heading from "./components/Heading/Heading";
import OpenSource from "./components/OpenSource/OpenSource.lazy";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Heading></Heading>

        <Experience />

        <OpenSource />

        <About />

        {/* <div className="App-router-container">
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/open-source">
              <OpenSource />
            </Route>
            <Route path="/experience">
              <Experience />
            </Route>

            <Redirect from="/" to="experience" />
          </Switch>
        </div> */}
      </div>
    </HashRouter>
  );
}

export default App;
