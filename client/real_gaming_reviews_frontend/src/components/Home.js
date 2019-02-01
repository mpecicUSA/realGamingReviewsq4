import React, { Component } from 'react';
import HomeGame from './Home_game'
import {Row, Col, Container } from 'reactstrap'






class Home extends Component {
    render() {
      let games = this.props.props.games;
      console.log(games)
      let gamesList = games.map(item => <HomeGame key={item.id} gameDetail={item} />).sort((a,b)=> a-b)
      return (
        <Container>
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