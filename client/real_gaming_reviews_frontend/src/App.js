import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import IndividualGame from './components/Individual_game.js'
import UserProfile from './components/User_profile.js'
import CreateReview from './components/Create_review.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Button } from 'reactstrap'



class App extends Component {
  state = { 
    
  }
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />

          <Switch>
            <Route path="/" exact render={() => <Home />} />
            <Route path="/login" render={() => <Login />} />
            <Route path="/register" render={() => <Register />} />
            <Route path="/game/:id" render={() => <IndividualGame />} />
            <Route path="/user/:id" render={() => <UserProfile />} />
            <Route path="/createreview" render={() => <CreateReview />} />
          </Switch>

          <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
