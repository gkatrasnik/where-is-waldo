import React from "react";
import { ListGroup, Image } from "react-bootstrap";
import "../App.css";

const CharactersDropdown = (props) => {
  const style = {
    position: "absolute",
    left: `${props.clickedCoordinates[0]}px`,
    top: `${props.clickedCoordinates[1]}px`,
    zIndex: 1,
  };

  const iconStyle = {
    height: "25px",
  };

  const handleChoose = (item) => {
    if (!props.showFoundCharacter) {
      //if choosen character is found...
      if (props.foundIsCorrect(item)) {
        props.addFoundSquare(
          props.clickedCoordinates[0],
          props.clickedCoordinates[1] + 100 // + 100px topbar height
        );
        props.handleFoundCharacter(item, props.checkGameOver);
      } else {
        props.toggleShowWrongFind();
      }
    }
    props.closeFoundCharacter();
  };
  return (
    <ListGroup style={style} className="charactersDropdown">
      <ListGroup.Item action variant="dark" onClick={props.closeFoundCharacter}>
        Close
      </ListGroup.Item>
      {props.charactersArray &&
        props.charactersArray.map((item, i) => {
          return (
            <ListGroup.Item key={i} action onClick={() => handleChoose(item)}>
              <Image
                style={iconStyle}
                src={process.env.PUBLIC_URL + item.url}
              ></Image>
              {item.name}
            </ListGroup.Item>
          );
        })}
    </ListGroup>
  );
};

export default CharactersDropdown;
