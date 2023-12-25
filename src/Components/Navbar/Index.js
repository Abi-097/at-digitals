import React from "react";
import "./Style.css";
import Container from "react-bootstrap/Container";
import { logo } from "../../image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavigationBar = () => {
  return (
    <div>
      <Navbar expand="md" className="navbar-bg">
        <Container fluid>
          <img
            src={logo}
            alt={logo}
            className="d-inline-block align-top me-2"
            style={{ padding: "20px" }}
          />
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ borderColor: "transparent" }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "350px" }}
              navbarScroll
            >
              <Nav.Link href="#action1" style={{ color: "white" }}>
                SERVICES
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>
                ABOUT US
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>
                CONTACT US
              </Nav.Link>
              <Nav.Link href="#action2" style={{ color: "white" }}>
                CAREERS
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
