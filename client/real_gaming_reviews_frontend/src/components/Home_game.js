import React, { Component } from 'react';
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer } from "mdbreact";
import ReactStars from "react-stars"
import { withRouter } from 'react-router-dom'



class HomeGame extends Component {
  buttonClicked = (e) => {
    this.props.history.push(`/game/${this.props.game.id}`)
  }

  createReview = (e) => {
    this.props.history.push(`/createreview/${this.props.game.id}`)
  }

    render() {
      let gameDetail = this.props.game
      return(
      <MDBContainer>
        <MDBCard style={{ width: "80rem", marginTop: "1rem" }}>
          <MDBCardBody>
            <MDBCardTitle>{gameDetail.title}</MDBCardTitle>
            <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
              {gameDetail.description}
            </MDBCardTitle>
            <MDBCardText>
              <ReactStars count={5} edit={false} value={gameDetail.rating/2} />
            </MDBCardText>
            <button  class="btn btn-warning" id={gameDetail.id} onClick={this.buttonClicked}>View</button>
            < button class="btn btn-primary"  id={gameDetail.id} onClick={this.createReview}>Create Review</button>
          </MDBCardBody>
        </MDBCard>
      </MDBContainer>
      );
    }
  }

  export default withRouter(HomeGame);
