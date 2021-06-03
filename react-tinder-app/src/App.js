import React from 'react'
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Tinder from './TinderCards'

function App() {
  return (
    <div className="App">
      {/*start of Header */ }
      <Header /> 
      <Router>
        {/* End of Header */}
        <Switch>
          <Route path="/chat">
              <h1>I am chat page</h1>
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
