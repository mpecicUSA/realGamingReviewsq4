import React, { Component } from 'react';
import HomeGame from './Home_game'
import {Row, Col, Container } from 'reactstrap'






class Home extends Component {
    render() {
      let games = this.props.games;
      let gamesList = games.map(item => <HomeGame key={item.id} game={item} />)
      return (
        <Container>
          <h1>Welcome to Real Game Reviews</h1>
          <h3>Top Games:</h3>
          <Row>
            <Col>
            Title
            </Col>
            <Col>
            Platform
            </Col>
            <Col>
            Studio
            </Col>
            <Col>
            Avg Rating
            </Col>
            <Col>
            # of Reviews
            </Col>
            <Col>
            Submit a review
            </Col>
          </Row>
        { gamesList }
        </Container>
      );
    }
  }
  
  export default Home;