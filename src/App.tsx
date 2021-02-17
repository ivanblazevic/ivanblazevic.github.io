import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import "./App.scss";
import About from "./components/About/About.lazy";
import Experience from "./components/Experience/Experience.lazy";
import Header from "./components/Header/Header";
import OpenSource from "./components/OpenSource/OpenSource.lazy";

function App() {
  return (
    <Router>
      <div className="App">
        <Header></Header>

        <div className="App-router-container">
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
        </div>
      </div>
    </Router>
  );
}

export default App;
