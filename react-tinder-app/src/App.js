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
      {/* End of Header */}
     
      <Router>
        <Switch>
          <Route path="/chat">
              <h1>I am chat page</h1>
          </Route>  
        </Switch>
        <Route path="/tinderCards">
          <TinderCards>
          </TinderCards>
        </Route>
      
        <Route path="/">
          <h1></h1>
        </Route>
      </Router>
    </div>
  );
}

export default App;