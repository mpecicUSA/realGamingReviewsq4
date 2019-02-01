import React, { Component } from 'react';
import {Navbar, NavbarBrand, Container} from "reactstrap"


class Footer extends Component {
    render() {
      return (
        <div className="fixed-bottom">
          <Navbar color="dark" dark> 
            <Container>
              <NavbarBrand>Copyright &copy; 2019 Galvanize-104 Lucas Marko Nathan</NavbarBrand>
              <NavbarBrand>Contact Us Careers Privacy Policy Terms of Use </NavbarBrand>
            </Container>
          </Navbar>
        </div>
      );
    }
  }
  
  export default Footer;

  // TODO Color Choices, Make Second NavbarBrand seperate items and links
