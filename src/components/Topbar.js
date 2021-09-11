import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../styles/picture.css";

function Topbar(props) {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Find Me!</Navbar.Brand>
        <Nav className="me-auto">
          {props.charactersArray.map((item, i) => {
            return <Nav.Link key={i}>{item.name}</Nav.Link>;
          })}

          <Nav.Link disabled> Time: 00:00</Nav.Link>
        </Nav>
        <Navbar.Text>{props.player}</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Topbar;
