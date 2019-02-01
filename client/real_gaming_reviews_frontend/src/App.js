import React, { Component } from 'react';
import './App.css';
import Navbarz from './components/Navbar.js'
import Footer from './components/Footer.js'
import Home from './components/Home.js'
import HomeGame from "./components/Home_game"
import Login from './components/Login.js'
import Register from './components/Register.js'
import IndividualGameReviewList from './components/Individual_game_review_list.js'
import UserProfileReviewList from './components/User_profile_review_list.js'
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
            <div className="main">
              <Switch>
                <Route path="/" exact render={() => <Home games={this.state.games} />} />
                <Route path="/login" component={Login} />
                <Route path="/register" render={() => <Register />} />
                <Route path="/game/:id" render={(props) => <IndividualGameReviewList reviews={this.state.reviews} games={this.state.games} {...props} />} />
                <Route path="/user/:id" render={() => <UserProfileReviewList />} />
                <Route path="/createreview" render={() => <CreateReview />} />
              </Switch>
            </div>



            <Footer />
        </>
      </BrowserRouter>
    );
  }
}

export default App;

// TODO resize footer, nav, and home to have own sections, home currently will hide behind footer DONE

// TODO look into instead of route () => compone

// If props not needed to pass down use component else use () => and you must declare what is being passed along with {...props} to pass down history/ router props 