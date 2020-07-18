import React from "react";
import "./App.css";
import "antd/dist/antd.css";

import { Route, Switch } from "react-router-dom";
import adminIndex from "./components/admin";
import publicIndex from "./components/public";
import Dashboard from "./components/admin/Dashboard";

function App() {
  return (
    <div>
      <div>
        <Switch>
          <Route path="/" exact component={publicIndex} />
          <Route path="/admin" component={adminIndex} />
          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
