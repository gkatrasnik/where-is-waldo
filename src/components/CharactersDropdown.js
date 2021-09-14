import { React, useEffect } from "react";
import { ListGroup, Image } from "react-bootstrap";
import "../index.css";

const CharactersDropdown = (props) => {
  const style = {
    position: "absolute",
    left: `${props.clickedCoordinates[0] - 81}px`,
    top: `${props.clickedCoordinates[1] + props.dropdownY}px`,
    zIndex: 1031,
    width: "170px",
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
          props.clickedCoordinates[1] + 100 // +100px for topbar height
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
      <ListGroup.Item action variant="dark" onClick={props.closeFoundCharacter}>
        Close
      </ListGroup.Item>
    </ListGroup>
  );
};

export default CharactersDropdown;
