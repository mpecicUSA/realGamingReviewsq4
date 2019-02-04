import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { withRouter } from 'react-router-dom'




class CreateReview extends Component {

  state = {
    user_id: 1,
    game_id: 1,
    platform: '',
    rating:'',
    hours_played: '',
    review_title: '',
    reviewContent: ''

  }

  _onChange = ({target}) =>  {
    this.setState({[target.id]: target.value})
  }

  _onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/reviews/addReview', {
      game_id: this.state.game_id,
      gameTitle: this.state.gameTitle,
      platform: this.state.platform,
      rating:this.state.rating,
      hours_played: this.state.hours_played,
      review_title: this.state.review_title,
      review: this.state.review,
      user_id: this.state.user_id
    }).then( (response) => {
      console.log(response);
      this.props.history.push('/')
    }).catch( (error) => {
      console.log(error);
    })

  }

    render() {
      return (
        <>
        <Container>
          <Form onSubmit={this._onSubmit} className=''>
              <h3 className=''>Create Your Review For:</h3>
              <h4>Game Title </h4>
              <FormGroup>
                <Label htmlFor='platform'>Platform Played On:</Label>
                <Input type='text' name='text' id='platform' placeholder="Platform" value={this.state.platform} onChange={this._onChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='rating'>Your Rating</Label>
                <Input type='text' name='text' id='rating' placeholder="Rating" value={this.state.rating} onChange={this._onChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='hours_played'>Total Hours You Have Played</Label>
                <Input type='text' name='text' id='hours_played' placeholder="Hours" value={this.state.hours_played} onChange={this._onChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='review_title'>Your Review Title</Label>
                <Input type='text' name='text' id='review_title' placeholder="Review Title" value={this.state.review_title} onChange={this._onChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='review'>Review</Label>
                <Input type='textarea' name='text' id='review' value={this.state.review} onChange={this._onChange}/>
              </FormGroup>
              <FormGroup>
                <Button>Submit</Button>
              </FormGroup>
            </Form>
          </Container>
        </>
      );
    }
  }

  export default withRouter(CreateReview);
