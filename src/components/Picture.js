import { React, useState } from "react";
import CharactersDropdown from "./CharactersDropdown";
import picture from "../assets/picture.jpg";
import { Image } from "react-bootstrap";

import WrongFind from "./WrongFind";
import "../App.css";

function Picture(props) {
  const [showFoundCharacter, setShowFoundCharacter] = useState(false);
  const [showWrongFind, setShowWrongFind] = useState(false);
  const [clickedCoordinates, setClickedCoordinates] = useState([0, 0]);
  const [dropdownY, setDropdownY] = useState(-140);

  const getDropdownY = (y) => {
    console.log(y, props.windowHeight);
    if (y > props.windowHeight - 260) {
      return -165;
    } else {
      return 105;
    }
  };

  const handleClick = (e) => {
    let x = e.pageX;
    // -100(topbar), top left picture corner is 0.0
    let y = e.pageY - 100;
    let clientY = y + 100;

    console.log("handle click", x, y);
    setClickedCoordinates([x, y]);
    setDropdownY(getDropdownY(clientY));

    setShowFoundCharacter(!showFoundCharacter);
  };

  const toggleShowWrongFind = () => {
    setShowWrongFind(!showWrongFind);
  };

  const closeFoundCharacter = () => {
    setShowFoundCharacter(false);
  };

  const foundIsCorrect = (item) => {
    if (
      clickedCoordinates[0] < item.position[0] * props.windowWidth + 30 &&
      clickedCoordinates[0] > item.position[0] * props.windowWidth - 30 &&
      //-100 topbar height
      clickedCoordinates[1] <
        item.position[1] * (props.windowHeight - 100) + 30 &&
      clickedCoordinates[1] > item.position[1] * (props.windowHeight - 100) - 30
    ) {
      return true;
    }

    return false;
  };

  //make square size dinamic
  const addFoundSquare = (x, y) => {
    let array = props.foundSquares;
    const squareStyle = {
      position: "absolute",
      left: `${x - 30}px`,
      top: `${y - 30}px`,
      width: 60,
      height: 60,
      border: "4px solid red",
    };
    const newSquare = <div style={squareStyle} key={x * y}></div>;

    props.setFoundSquares((array) => [array, newSquare]);
  };

  return (
    <>
      <Image
        onClick={handleClick}
        src={picture}
        className="picture"
        onLoad={props.setWindowSize}
      />
      {showFoundCharacter && (
        <CharactersDropdown
          dropdownY={dropdownY}
          clickedCoordinates={clickedCoordinates}
          charactersArray={props.charactersArray}
          handleFoundCharacter={props.handleFoundCharacter}
          closeFoundCharacter={closeFoundCharacter}
          foundIsCorrect={foundIsCorrect}
          addFoundSquare={addFoundSquare}
          toggleShowWrongFind={toggleShowWrongFind}
          checkGameOver={props.checkGameOver}
        />
      )}
      <WrongFind
        showWrongFind={showWrongFind}
        toggleShowWrongFind={toggleShowWrongFind}
      />
      {props.foundSquares}
    </>
  );
}

export default Picture;
