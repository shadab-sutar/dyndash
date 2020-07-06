import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import { Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import ArticleListing from "./components/ArticleListing";
import ProjectListing from "./components/ProjectListing";
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import About from "./sitepublic/About";
import Articles from "./sitepublic/Articles";
import Projects from "./sitepublic/Projects";
import Article from "./sitepublic/Article";

function App() {
  return (
    <div className="App">
      <div className="bodyComponents">
        <Switch>
          <Route path="/" component={About} exact />
          <Route path="/articles" component={Articles} />
          <Route path="/projects" component={Projects} />
          <Route path="/article/:id" component={Article} />
          <Route path="/adminportal" component={Login} />
          <Route path="/Dashboard" component={Dashboard} />
          <Route path="/homepage" component={HomePage} />
          <Route path="/articlelist" component={ArticleListing} />
          <Route path="/projectlist" component={ProjectListing} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
