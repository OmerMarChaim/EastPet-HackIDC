import React from 'react'
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from './TinderCards';
import Chats from "./Chats";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";
import SignIn from "./SignIn";

function App() {
  return (
    <div className="App"> 
      <Router>
        <Switch>
          <Route path="/chat/:person">
              <Header backButton='/chat' />
              <ChatScreen />
          </Route>  

          <Route path="/SignIn">
              <Header/>
              <SignIn />
          </Route>  

          <Route path="/chat">
              <Header backButton='/' />
              <Chats/>
          </Route>  
        
          <Route path="/">
            <Header />
          <TinderCards/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;