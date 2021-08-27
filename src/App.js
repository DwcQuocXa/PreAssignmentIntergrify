import React from "react";
import { UserProvider } from "./UserContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import AppBar from "./components/AppBar";
import UserDetail from "./components/UserDetail";

function App() {
  return (
    <Router>
      <UserProvider>
        <AppBar />
        <Switch>
          <Route exact path="/" component={() => <HomePage />} />
          <Route exact path="/:id" component={() => <UserDetail />} />
        </Switch>
      </UserProvider>
    </Router>
  );
}

export default App;
