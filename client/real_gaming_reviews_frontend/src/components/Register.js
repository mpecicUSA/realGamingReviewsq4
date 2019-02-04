import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import axios from 'axios'
import { withRouter } from 'react-router-dom'


class Register extends Component {
  state = {
    userName: "",
    email: "",
    password: ""
  }

  _onChange = ({target}) =>  {
    this.setState({[target.name]: target.value})
  }

  _onSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/users/addUser', {
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
    }).then( (response) => {
      console.log(response);
      this.props.history.push('/login')
    }).catch( (error) => {
      console.log(error);
    })

  }



  render() {

    return (
      <Container>
      {console.log(this.state)}
        <Form onSubmit={this._onSubmit}>
          <FormGroup>
            <Label for="userName">User Name</Label>
            <Input onChange={this._onChange} value={this.state.userName} type="userName" name="userName" id="userName" placeholder="User Name" />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={this._onChange} value={this.state.email} type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input onChange={this._onChange} value={this.state.password} type="password" name="password" id="password" placeholder="Password" />
          </FormGroup>
          <FormGroup>
            <Button>Register</Button>
          </FormGroup>
        </Form>
      </Container>
    )
  }
}


export default withRouter(Register)
