import React, { Component } from 'react';
import {Row, Col, Container } from 'reactstrap'


const header = {
  styles: {
   textAlign: "center",
   backgroundColor: "#ffa726",
   fontSize: "50px",
    color: "white",
    marginLeft: "2%",
    marginTop: "2%"
  }
}

const title = {
  styles:{
    margintop: "%",
    textAlign: "center"
  }
}

const image = {
  styles: {
    maxWidth: "350",
    maxHeight: "350px",
    marginLeft: "2%",
    marginTop: "2%",
    marginBottom: "2%",
  }
}

const description = {
  styles: {
    backgroundColor: "#ffa726",
    fontSize: "25px",
    color: "white"
  }
}

const reviewTitle = {
  styles: {
    backgroundColor: "#ffa726",
    fontSize: "30px",
    color: "white",
    marginLeft: "2%"
  }
}

const review_itself = {
  styles: {
    backgroundColor: "#bdbdbd",
    color: "white",
    fontSize: "25px",
    display: "block",
    marginBottom: "1%",
    marginLeft: "2%"
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
         <Row>
           <Col>
          <div>
            <img style={image.styles} src={gameTitle.img} alt="image"/>
          </div>
          <div style={description.styles}>
            <span>{gameTitle.description}</span>
          </div>
          </Col>
         </Row>
         <div>
           <h2 style={title.styles}>{gameTitle.title} Reviews:</h2>
         </div>
         {console.log("This props reviews", this.props.reviews)}
         {console.log(this.props.match.params.id)}
         {console.log(this.props.reviews.filter(review => review.id == this.props.match.params.id))}
         {this.props.reviews.filter(review => review.game_id == this.props.match.params.id)
          .map(review => {
            return <div>
                    <span style={reviewTitle.styles}>Review Title - {review.review_title}</span>
                    <span style={review_itself.styles}>Review - {review.review}</span>
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