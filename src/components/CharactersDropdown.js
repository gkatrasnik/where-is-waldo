import React from "react";
import { ListGroup } from "react-bootstrap";
import "../styles/charactersDropdown.css";

const CharactersDropdown = (props) => {
  const style = {
    position: "absolute",
    left: `${props.coordinates[0] - 55}px`,
    top: `${props.coordinates[1]}px`,
    zIndex: 1,
  };

  const handleChoose = () => {
    if (!props.showFoundCharacter) {
      props.addFoundSquare(props.coordinates[0], props.coordinates[1]);
    }
    props.closeFoundCharacter();
  };
  return (
    <ListGroup style={style} className="charactersDropdown">
      <ListGroup.Item action variant="dark" onClick={props.closeFoundCharacter}>
        Close
      </ListGroup.Item>
      {props.charactersArray.map((item, i) => {
        return (
          <ListGroup.Item key={i} action onClick={handleChoose}>
            {item.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CharactersDropdown;
