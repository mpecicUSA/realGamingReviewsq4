import React, { Component } from 'react';
import HomeGame from './Home_game'
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";







class Home extends Component {
    render() {
      // let games = this.props.games;
      // let gamesList = games.map(item => <HomeGame key={item.id} game={item} />)
      // gamesList = gamesList.filter(gameDetail => gameDetail.title)


      let filteredGames = this.props.games.filter(game => game.title.toUpperCase().includes((this.props.searchBar).toUpperCase()))
        let game = [];

        game = filteredGames.map(game =>   <HomeGame key={game.id} game={game} reviews={this.props.reviews.filter(review => review.game_id === game.id)} />);
      return (
        <MDBContainer>
          <MDBRow> 
          <h1>Welcome to Real Game Reviews</h1>
          </MDBRow>
              { game }
        </MDBContainer>
      );
    }
  }
  
  export default Home;