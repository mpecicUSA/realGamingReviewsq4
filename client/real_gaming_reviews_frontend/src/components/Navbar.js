import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Form
} from 'reactstrap';



class Navbarz extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
    render() {
      return (
        <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Real Gaming Reviews</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
              <Form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search Games" aria-label="Search"/>
              </Form>
              </NavItem>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                {/* insert logic here IF token ?
                userData == true ? <NavLink href='/profile'>Welcome back {DATA USER NAME} </NavLink> :
                */}
                <NavLink href="/login">Login </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/register">Register</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
  
  export default Navbarz;

  // TODO confirm routes are correct 
  // TODO remove href update to LinkTo? 
  // TODO Pass token data down to Navbar so can display welcome user or login register nav choices in navbar
