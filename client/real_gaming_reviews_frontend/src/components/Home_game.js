import React, { Component } from 'react';
import { Container, Row, Col, Button} from "reactstrap";
import ReactStars from "react-stars"



class HomeGame extends Component {
    render() {
      let gameDetail = this.props.gameDetail
      return (
        <Container>
          <Row>
            <Col>
              { gameDetail.title }
            </Col>
            <Col>
            Platform
            </Col>
            <Col>
            Studio
            </Col>
            <Col>
              <ReactStars count={10} edit={false} value={gameDetail.rating} />
            </Col>
            <Col>
            # of Reviews
            </Col>
            <Col>
              <Button> Review </Button>
            </Col>
          </Row>
        </Container>
      );
    }
  }
  
  export default HomeGame;
