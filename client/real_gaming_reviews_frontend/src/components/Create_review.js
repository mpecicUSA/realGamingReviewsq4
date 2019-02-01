import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Redirect } from 'react-router-dom'



class CreateReview extends Component {

  state = {
    gameTitle: '',
    platform: '',
    rating:'',
    hoursPlayed: '',
    reviewTitle: '',
    reviewContent: ''

  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createReview(this.state)
    this.props.history.push('./');
  }
  
    render() {
      return (
        <>
        <Container>
          <Form onSubmit={this.handleSubmit} className=''>
              <h3 className=''>Create Your Review</h3>
              <FormGroup>
                <Label htmlFor='gameTitle'>Game Title</Label>
                <Input type='text' name='text' id='gameTitle' placeholder="Game Title" onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='platform'>Platform</Label>
                <Input type='text' name='text' id='platform' placeholder="Platform" onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='rating'>Rating</Label>
                <Input type='text' name='text' id='rating' placeholder="Your Rating" onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='hoursPlayed'>Hours Played</Label>
                <Input type='text' name='text' id='hoursPlayed' placeholder="Total Hours Played" onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='reviewTitle'>Review Title</Label>
                <Input type='text' name='text' id='reviewTitle' placeholder="Review Title" onChange={this.handleChange}/>
              </FormGroup>
              <FormGroup>
                <Label htmlFor='reviewContent'>Review</Label>
                <Input type='textarea' name='text' id='reviewContent' onChange={this.handleChange}/>
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

  export default CreateReview;
