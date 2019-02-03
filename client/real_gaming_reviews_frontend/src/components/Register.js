import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

class Register extends Component {
  state = {
    email: "",
    password: ""
  }

  onChange = ({target}) => {
    this.setState({
      [target.name]: target.value
    })
  }

  onSubmit = (e) => {
    e.preventDefault()

    this.props.addUser(this.state, this.props.history)
  }

  render() {

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          {this.props.registerError && <span style={{color: "red"}}>Email already linked to an existing account</span>}
          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={this.onChange} value={this.state.email} type="email" name="email" id="email" placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input onChange={this.onChange} value={this.state.password} type="password" name="password" id="password" placeholder="Password" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </Container>
    )
  }
}


  export default Register;
