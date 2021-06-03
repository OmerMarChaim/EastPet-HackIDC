import React from 'react'
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Tinder from './TinderCards'
import Chats from "./Chats";

function App() {
  return (
    <div className="App">
      <h1>Pet Tinder</h1>
      {/*start of Header */ }
      <Router>
        <Header /> 
          {/* End of Header */}
        <Switch>   
      <Route path="/chat">
          <Chats />
      </Route>
               
        <Route path="/">
          <h1>I am homepage</h1>
        </Route>

        </Switch>

      {}
      {}
      {}

      </Router>

      
      
      

    </div>
  );
}

export default App;
