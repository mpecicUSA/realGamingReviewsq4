import React, { Component } from 'react';
import './App.css';
import Navbarz from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import IndividualGame from './components/Individual_game.js'
import UserProfile from './components/User_profile.js'
import CreateReview from './components/Create_review.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";




class App extends Component {

  state = {
  }
  async componentDidMount() {
    const commentsResponse = await fetch('http://localhost:8000/comments')
    const jcomments = await commentsResponse.json()
    const usersResponse = await fetch('http://localhost:8000/users')
    const jusers = await usersResponse.json()
    const reviewsResponse = await fetch('http://localhost:8000/reviews')
    const jreviews = await reviewsResponse.json()
    const gamesResponse = await fetch('http://localhost:8000/games')
    const jgames = await gamesResponse.json()
    this.setState({ comments: jcomments, users: jusers, reviews: jreviews
      ,games: jgames})
  }

  render() {
    return (
      <BrowserRouter>
        <>

            <Navbarz />
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
