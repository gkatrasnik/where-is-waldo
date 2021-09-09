import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/picture.css";

function Topbar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Find Me!</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="">Char1</Nav.Link>
          <Nav.Link href="">Char2</Nav.Link>
          <Nav.Link href="">Char3</Nav.Link>
          <Nav.Link href="" disabled>
            Time
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Topbar;
