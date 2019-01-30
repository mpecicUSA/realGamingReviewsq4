import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import IndividualGame from './components/Individual_game.js'
import UserProfile from './components/User_profile.js'
import CreateReview from './components/Create_review.js'



class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      <Home />
      <Login />
      <Register />
      <IndividualGame />
      <UserProfile />
      <CreateReview />
      <Footer />
      </>
    );
  }
}

export default App;
