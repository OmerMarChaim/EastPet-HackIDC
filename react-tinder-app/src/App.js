import React from 'react'
import './App.css';
import Header from './Header'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import TinderCards from './TinderCards';
import Chats from "./Chats";
import SwipeButtons from "./SwipeButtons";
import ChatScreen from "./ChatScreen";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Application from "./Components/Application";
import UserProvider from "./providers/UserProvider";

function App() {
  return (
    <div className="App"> 
      <Router>
      
        <Switch>
        <UserProvider>
        <Application />
        </UserProvider>
          <Route path="/chat/:person">
              <Header backButton='/' />
              <ChatScreen />
          </Route>  

          <Route path="/SignIn">
              <Header/>
              <SignIn />
          </Route>  

          <Route path="/TinderCards">
              <TinderCards />
          </Route>  

          <Route path="/SignUp">
              <Header/>
              <SignUp />
          </Route>  
          <Route path="/chat">
              <Header backButton='/' />
              <h1 className='i_am_chat_page'>I am chat page</h1>
              <h2 className="roi_chats_page">Roi is the king</h2>
              <Chats/>
          </Route>  
        
          <Route path="/">
            <Header />
            <TinderCards/>
            <SwipeButtons/>
          </Route>
        </Switch>
      </Router>
    </div>
    
  );
}

export default App;