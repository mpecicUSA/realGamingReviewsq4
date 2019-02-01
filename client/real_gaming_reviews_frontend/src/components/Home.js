import React, { Component } from 'react';
import HomeGameList from './Home_gamelist.js'






class Home extends Component {
    render() {
      return (
        <>
        <h1>Welcome to Real Game Reviews</h1>
        <HomeGameList />

        </>
      );
    }
  }
  
  export default Home;