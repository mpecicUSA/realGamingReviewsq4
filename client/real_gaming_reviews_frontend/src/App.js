import React, { Component } from 'react';
import './App.css';
import Navbarz from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import Login from './components/Login.js'
import Register from './components/Register.js'
import IndividualGameReviewList from './components/Individual_game_review_list.js'
import UserProfile from './components/User_profile.js'
import CreateReview from './components/Create_review.js'
import { BrowserRouter, Switch, Route } from "react-router-dom";




class App extends Component {
  state = { 
    users: [],
    reviews: [],
    comments: [],
    games: []
  }


  async componentDidMount() {
    const commentsResponse = await fetch('http://localhost:8000/comments')
    const comments = await commentsResponse.json()
    const usersResponse = await fetch('http://localhost:8000/users')
    const users = await usersResponse.json()
    const reviewsResponse = await fetch('http://localhost:8000/reviews')
    const reviews = await reviewsResponse.json()
    const gamesResponse = await fetch('http://localhost:8000/games')
    const games = await gamesResponse.json()
    this.setState({ comments, users, reviews, games })
  }


  render() {
    return (
      <BrowserRouter>
        <>

            <Navbarz />
            <Switch>
              <Route path="/" exact render={() => <Home props={this.state} />} />
              <Route path="/login" render={() => <Login />} />
              <Route path="/register" render={() => <Register />} />
              <Route path="/game/:id" render={(props) => <IndividualGameReviewList reviews={this.state.reviews} games={this.state.games} {...props}/>} />
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

// TODO resize footer, nav, and home to have own sections, home currently will hide behind footer