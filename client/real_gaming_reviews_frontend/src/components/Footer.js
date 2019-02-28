import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter, MDBNavLink } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="12">
            <h5 className="title">Real Gaming Reviews</h5>
            <p>
              Thanks for visiting our site! 
            </p>
          </MDBCol>
          <MDBCol md="6">
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Lucas, Nathan, Marko
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;
