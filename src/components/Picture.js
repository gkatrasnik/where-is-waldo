import { React, useState, useEffect } from "react";
import CharactersDropdown from "./CharactersDropdown";
import picture from "../assets/picture.jpg";
import { Image, Button } from "react-bootstrap";
import "../styles/picture.css";

function Picture(props) {
  const [showFoundCharacter, setShowFoundCharacter] = useState(false);
  const [clickedCoordinates, setClickedCoordinates] = useState([0, 0]);

  const handleClick = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    console.log("handle click", x, y);
    setClickedCoordinates([x, y]);

    setShowFoundCharacter(!showFoundCharacter);
  };

  const closeFoundCharacter = () => {
    setShowFoundCharacter(false);
  };

  const foundIsCorrect = (item) => {
    if (
      clickedCoordinates[0] < item.position[0] * props.windowWidth + 30 &&
      clickedCoordinates[0] > item.position[0] * props.windowWidth - 30 &&
      clickedCoordinates[1] < item.position[1] * props.windowHeight + 30 &&
      clickedCoordinates[1] > item.position[1] * props.windowHeight - 30
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
          clickedCoordinates={clickedCoordinates}
          charactersArray={props.charactersArray}
          handleFoundCharacter={props.handleFoundCharacter}
          closeFoundCharacter={closeFoundCharacter}
          foundIsCorrect={foundIsCorrect}
          addFoundSquare={addFoundSquare}
          checkGameOver={props.checkGameOver}
        />
      )}

      {props.foundSquares}
    </>
  );
}

export default Picture;
