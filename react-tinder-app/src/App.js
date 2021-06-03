import React from 'react'
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from './TinderCards';

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
                  
          
        </Switch>
        <Route path="/tinderCards">
        <h1>I am tinder cards</h1>
          <TinderCards>

          </TinderCards>
      </Route>

      <Route path="/">
            <h1>I am homepage</h1>
          </Route>

      {}
      {}
      {}

      </Router>

      
      
      

    </div>
  );
}

export default App;
