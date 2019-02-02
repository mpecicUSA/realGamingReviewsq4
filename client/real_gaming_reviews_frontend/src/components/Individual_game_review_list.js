import React, { Component } from 'react';






class IndividualGameReviewList extends Component {
    render() {
      console.log('hello', this.props)
      let gameTitle = this.props.games.filter(game => game.id == this.props.match.params.id)[0]
      console.log('GAMENAME', gameTitle)
      if(gameTitle){
      return (
        <>
         <div>
          <h1>{gameTitle.title}</h1>
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
         {console.log("This props reviews", this.props.reviews)}
         {console.log(this.props.match.params.id)}
         {console.log(this.props.reviews.filter(review => review.id == this.props.match.params.id))}
         {this.props.reviews.filter(review => review.game_id == this.props.match.params.id)
          .map(review => {
            return <div>
                    <h2>{review.review_title}</h2>
                    <h3>{review.review}</h3>
                  </div>
          }) 
        }
        </>
      )
      }else{
        return 'error';
      }
    }
  }

  
  export default IndividualGameReviewList;