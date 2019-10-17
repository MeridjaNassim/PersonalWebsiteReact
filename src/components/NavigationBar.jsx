import React from "react";
import { Navbar, Nav } from "react-bootstrap";

import "../styles/navigation.css";
const NavigationBar = () => {
  return (
    <Navbar
      expand="lg"
      fixed="top"
      sticky="top"
      variant="dark"
      className="dark-bg"
    >
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto ml-auto ">
          <Nav.Link className="link" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="link" href="#About">
            About
          </Nav.Link>
          <Nav.Link className="link" href="#Skills">
            Skills
          </Nav.Link>
          <Nav.Link className="link" href="#Academic">
            Academic Profile
          </Nav.Link>
          <Nav.Link className="link " href="#Work">
            Work Experience
          </Nav.Link>
          <Nav.Link className="link " href="#projects">
            Portfolio
          </Nav.Link>
          <Nav.Link className="link " href="#Interests">
            Intrests
          </Nav.Link>
          <Nav.Link className="link" href="#Contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
