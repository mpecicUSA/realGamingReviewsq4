import React, {Component} from 'react'
import { Container, Form, Button, Input, FormGroup, Label } from 'reactstrap';

class Login extends Component{

  state = {
    email: "",
    password: ""
  }

  _onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state);
    this.setState({username: "", password: ""})
  }

  _onChange = ({target}) =>  {
    this.setState({[target.name]: target.value})
  }

  render(){
    return (
      <Container>
        <Form onSubmit={this._onSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={this._onChange} value={this.state.email} name="email" type='email' placeholder='Email' />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input onChange={this._onChange} value={this.state.password} name="password" type='password' placeholder='Password' />
          </FormGroup>
          <Button>Sign in</Button>
        </Form>
      </Container>
    )
  }
}

export default Login
