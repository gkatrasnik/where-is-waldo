import { React, useState, useEffect } from "react";
import CharactersDropdown from "./CharactersDropdown";
import picture from "../assets/picture.jpg";
import { Image, Button } from "react-bootstrap";
import "../styles/picture.css";

function Picture(props) {
  const [showFoundCharacter, setShowFoundCharacter] = useState(false);
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [foundSquares, setFoundSquares] = useState([]);

  const handleClick = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    console.log(x, y);
    setCoordinates([x, y]);

    setShowFoundCharacter(!showFoundCharacter);
  };

  const closeFoundCharacter = () => {
    setShowFoundCharacter(false);
  };

  const foundIsCorrect = (item) => {
    if (
      coordinates[0] < item.position[0] * props.windowWidth + 30 &&
      coordinates[0] > item.position[0] * props.windowWidth - 30 &&
      coordinates[1] < item.position[1] * props.windowHeight + 30 &&
      coordinates[1] > item.position[1] * props.windowHeight - 30
    ) {
      console.log("FOUND------------------");
      return true;
    }
    console.log("not found");
    return false;
  };

  const addFoundSquare = (x, y) => {
    const squareStyle = {
      position: "absolute",
      left: `${x - 30}px`,
      top: `${y - 30}px`,
      width: 60,
      height: 60,
      border: "4px solid red",
    };
    const newSquare = <div style={squareStyle}></div>;

    setFoundSquares((foundSquares) => [...foundSquares, newSquare]);
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
          coordinates={coordinates}
          charactersArray={props.charactersArray}
          handleFoundCharacter={props.handleFoundCharacter}
          closeFoundCharacter={closeFoundCharacter}
          foundIsCorrect={foundIsCorrect}
          addFoundSquare={addFoundSquare}
        />
      )}

      {foundSquares}
    </>
  );
}

export default Picture;
