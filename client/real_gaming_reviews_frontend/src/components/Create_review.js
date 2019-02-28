import React, { Component } from 'react';
import { Container, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios'
import { withRouter } from 'react-router-dom'




class CreateReview extends Component {

  state = {
    game_id: this.props.history.location,
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
      game_id: this.props.match.params.id,
      platform: this.state.platform,
      rating:this.state.rating,
      hours_played: this.state.hours_played,
      review_title: this.state.review_title,
      review: this.state.review,
      user_id: localStorage.getItem('user_id')
    }).then( (response) => {
      console.log(response);
      this.props.history.push('/')
    }).catch( (error) => {
      console.log(error);
    })

  }

    render() {
      let gameId = Number(this.props.match.params.id)
      let game = this.props.games.filter(game => Number(game.id) === gameId)[0];
      return (
        <>
        <Container>
          <Form onSubmit={this._onSubmit} className=''>
              <h3 className=''>Create Your Review For:</h3>
              <h4>{game && game.title}</h4>
              <FormGroup>
                <Label htmlFor='platform'>Platform Played On:</Label>
                <Input type='text' name='text' id='platform' placeholder="Platform" value={this.state.platform} onChange={this._onChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='rating'>Your Rating (Out of 10)</Label>
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
                <button class="btn btn-warning">Submit</button>
              </FormGroup>
            </Form>
          </Container>
        </>
      );
    }
  }

  export default withRouter(CreateReview);
