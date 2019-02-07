import React, { Component } from 'react';
import {Row, Col, Container, Button } from 'reactstrap'


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
    textAlign: "center",
    backgroundColor: "#ffa726",
    color: "white",
    fontSize: "40px",
    marginLeft: "2%"
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
    color: "white",
    marginLeft: "2%",
    marginBottom: "30px"
  }
}

const button = {
  styles: {
    backgroundColor: "#ffa726 !important"
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
  createReview = (e) => {
    this.props.history.push(`/createreview/${e.target.attributes.id.value}`)
  }
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
          <div>
            <span style={description.styles}>{gameTitle.description}</span>
          </div>
         <div>
           <span style={title.styles}>{gameTitle.title} Reviews</span>
         </div>
         <button  class="btn btn-primary" id={gameTitle.id} onClick={this.createReview}>Create Review</button>

         {/* {console.log("This props reviews", this.props.reviews)}
         {console.log(this.props.match.params.id)}
         {console.log(this.props.reviews.filter(review => review.id == this.props.match.params.id))} */}
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