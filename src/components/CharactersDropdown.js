import React from "react";
import { ListGroup } from "react-bootstrap";
import "../styles/charactersDropdown.css";

const CharactersDropdown = (props) => {
  const style = {
    position: "absolute",
    left: `${props.coordinates[0]}px`,
    top: `${props.coordinates[1]}px`,
  };
  return (
    <ListGroup style={style} className="charactersDropdown">
      <ListGroup.Item variant="dark" onClick={props.closeFoundCharacter}>
        Close
      </ListGroup.Item>
      <ListGroup.Item>Character 1</ListGroup.Item>
      <ListGroup.Item>Character 2</ListGroup.Item>
      <ListGroup.Item>Character 3</ListGroup.Item>
    </ListGroup>
  );
};

export default CharactersDropdown;
