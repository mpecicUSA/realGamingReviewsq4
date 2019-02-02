import React, { Component } from 'react';
import { Container, Row, Col, Button} from "reactstrap";
import ReactStars from "react-stars"
import { withRouter } from 'react-router-dom'



class HomeGame extends Component {
  buttonClicked = (e) => {
    this.props.history.push(`/game/${this.props.game.id}`)
  }
  
    render() {
      let gameDetail = this.props.game
      return (
        <Container>
          <Row>
            <Col>
              { gameDetail.title }
            </Col>
            <Col>

            </Col>
            <Col>
            {this.props.reviews.length}
            </Col>
            <Col>
              <ReactStars count={5} edit={false} value={gameDetail.rating/2} />
            </Col>
            <Col>
            <Button id={gameDetail.id} onClick={this.buttonClicked}>View</Button> 
            </Col>
            <Col>
              <Button>Review</Button>
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default withRouter(HomeGame);
