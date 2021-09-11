import React from "react";
import { ListGroup } from "react-bootstrap";
import "../styles/charactersDropdown.css";

const CharactersDropdown = (props) => {
  const style = {
    position: "absolute",
    left: `${props.clickedCoordinates[0] - 55}px`,
    top: `${props.clickedCoordinates[1]}px`,
    zIndex: 1,
  };

  const handleChoose = (item) => {
    if (!props.showFoundCharacter) {
      //if choosen character is found...
      if (props.foundIsCorrect(item)) {
        props.addFoundSquare(
          props.clickedCoordinates[0],
          props.clickedCoordinates[1]
        );
        props.handleFoundCharacter(item, props.checkGameOver);
      } else {
        alert("Nope, keep looking!");
      }
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
          <ListGroup.Item key={i} action onClick={() => handleChoose(item)}>
            {item.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default CharactersDropdown;
