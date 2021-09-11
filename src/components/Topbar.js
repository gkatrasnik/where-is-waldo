import React from "react";
import { Navbar, Container, Nav, Image } from "react-bootstrap";
import "../styles/picture.css";

function Topbar(props) {
  const topbarStyle = {
    height: "100px",
  };

  const imgStyle = {
    height: "50px",
  };
  return (
    <Navbar style={topbarStyle} bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Find Me!</Navbar.Brand>
        <Nav className="me-auto">
          {props.charactersArray.map((item, i) => {
            return (
              <Nav.Link key={i}>
                <Image
                  style={imgStyle}
                  src={process.env.PUBLIC_URL + item.url}
                ></Image>
              </Nav.Link>
            );
          })}

          <Nav.Link disabled> Time: 00:00</Nav.Link>
        </Nav>
        <Navbar.Text>{props.player}</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Topbar;
