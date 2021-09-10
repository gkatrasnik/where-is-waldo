import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/picture.css";

function Topbar(props) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Find Me!</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Char1</Nav.Link>
          <Nav.Link>Char2</Nav.Link>
          <Nav.Link>Char3</Nav.Link>
          <Nav.Link disabled>Time</Nav.Link>
        </Nav>
        <Navbar.Text>{props.player}</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Topbar;
