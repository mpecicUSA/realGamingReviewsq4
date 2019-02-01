import React, { Component } from 'react';

const game_title = {
  styles: {
    marginLeft: "40%",
    marginTop: "5%"
  }
}





class IndividualGameReviewList extends Component {
    render() {
      console.log('hello', this.props)
      let gameTitle = this.props.games.filter(game => game.id == this.props.match.params.id)[0]
      let gameReview = this.props.reviews.filter(review => review.game_id == this.props.match.params.game_id)
      console.log('GAMENAME', gameTitle)
      if(gameTitle){
      return (
        <>
         <div>
          <h1 style={game_title.styles}>{gameTitle.title}</h1>
         </div>
         <div>
          <img src={gameTitle.img} alt="image"/>
         </div>
         <div>
          <h2>{gameTitle.description}</h2>
         </div>
         <div>
           <h2>{gameTitle.title} Reviews:</h2>
         </div>
        </>
        );
      }else{
        return 'error';
      }
    }
  }
  
  export default IndividualGameReviewList;