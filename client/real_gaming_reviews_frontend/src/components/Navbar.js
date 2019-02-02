import React, { Component } from "react";
import {
MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline
} from "mdbreact";


const header = {
  styles: {
    backgroundColor: "#ffa726"
  }
}

const link = { 
  styles: {
    color: "white"
  }
}

class Navbarz extends Component {
state = {
  isOpen: false
};
updateSearchBar = (e) => {
  this.props.searchBarUpdate(e.target.value)
}



toggleCollapse = () => {
  this.setState({ isOpen: !this.state.isOpen });
}

render() {
  return (
      <MDBNavbar style={header.styles} expand="md">
        <MDBNavbarBrand>
          <strong className="white-text">Real Gaming Reviews</strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse} />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
        <MDBNavbarNav center>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" onChange={this.updateSearchBar} value={this.props.searchBar} placeholder="Search games by title" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
          <MDBNavbarNav right>
            <MDBNavItem >
              <MDBNavLink style={link.styles} to="/">Home</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink style={link.styles} to="/user/:id">Profile</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink style={link.styles} to="/login">Login</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink style={link.styles} to="/register">Register</MDBNavLink>
            </MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default Navbarz;

// TODO Insert Logic for Profile or Login / Register icons in nav bar - PENDING token / login
