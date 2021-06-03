import React from 'react'
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Tinder from './TinderCards'
import TinderCards from './TinderCards';

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
          <h1>I am chat page</h1>
      </Route>
               
        <Route path="/">
          <h1>I am homepage</h1>
        </Route>

        </Switch>
        <Route path="/tinderCards">
        <h1>I am tinder cards</h1>
          <TinderCards>

          </TinderCards>
      </Route>

      {}
      {}
      {}

      </Router>

      
      
      

    </div>
  );
}

export default App;
