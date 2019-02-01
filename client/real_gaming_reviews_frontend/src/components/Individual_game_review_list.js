import React, { Component } from 'react';







class IndividualGameReviewList extends Component {
    render() {
      console.log('hello', this.props)
      let gameTitle = this.props.games.filter(game => game.id == this.props.match.params.id)[0]
      console.log('GAMENAME', gameTitle)
      if(gameTitle){
      return (
        <>
         <h1>{gameTitle.title}</h1>
         <img src={gameTitle.img} alt="image"/>
         <h2>{gameTitle.description}</h2>
        </>
        );
      }else{
        return 'error';
      }
    }
  }
  
  export default IndividualGameReviewList;