import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Sidebar from "./componets/Sidebar/Sidebar";
import Navbar from "./componets/Navbar/Navbar";
import Wrapper from "./componets/layout/Wrapper";
import Main from "./componets/Main/Main";

import Error from "./componets/pages/Error";
import Quotes from "./componets/pages/Quotes";
function App() {
  return (
    <Router>
      <Wrapper styles="App">
        <Navbar icon="fab fa-audible" title="Wet Bat" subtitle="TRAVEL" />
        <Wrapper styles="main">
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/quotes" component={Quotes} />
            <Route path="*" component={Error} />
          </Switch>
        </Wrapper>
      </Wrapper>
    </Router>
  );
}

export default App;
