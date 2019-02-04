import React, {Component} from 'react'
import { Container, Form, Button, Input, FormGroup, Label } from 'reactstrap';
import axios from 'axios'
import { withRouter } from 'react-router-dom'

class Login extends Component{

  state = {
    email: "",
    password: ""
  }


  _onChange = ({target}) =>  {
    this.setState({[target.name]: target.value})
  }

  _onSubmit = (e) => {
    e.preventDefault();
    console.frog = console.log;
    console.frog('gets here')
    axios.post('http://localhost:8000/login', {
      email:this.state.email,
      password:this.state.password
    })
    .then(res => {
      console.frog('res is', res)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('user_id', res.data.user.id);
      localStorage.setItem('userName', res.data.user.userName);
      this.props.history.push('/')
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
  });
    // resp.token;
    //
    // localStorage.setItem('token', resp.token);
  }



  render(){
    return (
      <Container>
        <Form onSubmit={this._onSubmit.bind(this)}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input onChange={this._onChange} value={this.state.email} name="email" type='email' placeholder='Email' />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input onChange={this._onChange} value={this.state.password} name="password" type='password' placeholder='Password' />
          </FormGroup>
          <FormGroup>
            <Button>Sign in</Button>
          </FormGroup>
        </Form>
      </Container>
    )
  }
}

export default withRouter(Login)
