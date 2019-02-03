import React, {Component} from 'react'
import { Container, Form, Button, Input, FormGroup, Label } from 'reactstrap';

class Login extends Component{

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
    this.props.login(this.state, this.props.history)
  }

  render(){
    return (
      <Container>
        <Form onSubmit={this.onSubmit} style={{display: "flex", alignItems: "center", justifyContent: "flex-end"}}>
          {this.props.loginError && <p>Email and/or password is incorrect</p>}
          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={this.onChange} value={this.state.email} name="email" type='email' placeholder='email' />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input onChange={this.onChange} value={this.state.password} name="password" type='password' placeholder='password' />
          </FormGroup>
          <Button>Sign in</Button>
        </Form>
      </Container>
    )
  }
}

export default Login
