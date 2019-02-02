import React, { Component } from 'react';



const header = {
  styles: {
   textAlign: "center",
   backgroundColor: "#ffa726",
   fontSize: "50px",
    color: "white",
    marginLeft: "34%",
    marginTop: "2%"
  }

}
const image = {
  styles: {
    maxWidth: "350",
    maxHeight: "350px",
    marginLeft: "40%",
    marginTop: "2%",
    marginBottom: "2%"
  }
}
const description = {
  styles: {
    backgroundColor: "#ffa726",
    fontSize: "30px",
    color: "white",
    textAlign: "center"
  }
}






class IndividualGameReviewList extends Component {
    render() {
      console.log('hello', this.props)
      let gameTitle = this.props.games.filter(game => game.id == this.props.match.params.id)[0]
      console.log('GAMENAME', gameTitle)
      if(gameTitle){
      return (
        <>
         <div>
          <span style={header.styles}>{gameTitle.title}</span>
         </div>
         <div>
          <img style={image.styles} src={gameTitle.img} alt="image"/>
         </div>
         <div style={description.styles}>
          <span>{gameTitle.description}</span>
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