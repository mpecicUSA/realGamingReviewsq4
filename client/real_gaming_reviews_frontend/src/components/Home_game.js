import React, { Component } from 'react';
import {Media, Container, Row, Col, Button} from "reactstrap";






class HomeGame extends Component {
    render() {
      return (
      <Container>
        <Col>
          <Row>
            <Media>
            <Media left href="#">
              <Media object data-src="https://via.placeholder.com/150" alt="Generic placeholder image" />
            </Media>
            <Media body>
              <Media heading>
                Game Title Goes here
              </Media>
              Game Description goes here.Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
            </Media>
            </Media>
            <Button> Reviews </Button>
          </Row>
        </Col>
      </Container>
      );
    }
  }
  
  export default HomeGame;

  // TODOD Pending DATA 