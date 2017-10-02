import React from "react";
import Portfolio from "./Portfolio";
import { Switch, Route } from 'react-router-dom';
import About from "./About"
import Header from "./Header"

function App(props){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Portfolio} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
  );
}

export default App;
