import React from "react";
import Timer from "./Timer";
import { Navbar, Container, Nav, Image } from "react-bootstrap";

function Topbar(props) {
  const topbarStyle = {
    height: "100px",
    width: "100%",
  };

  const imgStyle = {
    height: "50px",
  };
  return (
    <Navbar style={topbarStyle} bg="dark" variant="dark" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Find Me!</Navbar.Brand>
        <Nav className="me-auto">
          {props.charactersArray &&
            props.charactersArray.map((item, i) => {
              return (
                <Nav.Link key={i}>
                  <Image
                    style={imgStyle}
                    src={process.env.PUBLIC_URL + item.url}
                  ></Image>
                </Nav.Link>
              );
            })}
        </Nav>

        <Timer
          charactersArray={props.charractersArray}
          gameStartTime={props.gameStartTime}
          gameTime={props.gameTime}
          player={props.player}
        ></Timer>

        <Navbar.Text>{props.player}</Navbar.Text>
      </Container>
    </Navbar>
  );
}

export default Topbar;
