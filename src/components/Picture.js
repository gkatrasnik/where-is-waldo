import { React, useState, useEffect } from "react";
import CharactersDropdown from "./CharactersDropdown";
import picture from "../assets/picture.jpg";
import { Image, Button } from "react-bootstrap";
import "../styles/picture.css";

function Picture() {
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

  const foundIsCorrect = () => {
    return true;
  };

  const addFoundSquare = (x, y) => {
    const squareStyle = {
      position: "absolute",
      left: `${x - 25}px`,
      top: `${y - 25}px`,
      width: "50px",
      height: "50px",
      border: "4px solid red",
    };
    const newSquare = <div style={squareStyle} key={x + y}></div>;
    if (foundIsCorrect()) {
      setFoundSquares((foundSquares) => [...foundSquares, newSquare]);
    }
  };

  return (
    <>
      <Image onClick={handleClick} src={picture} className="picture" />
      {showFoundCharacter && (
        <CharactersDropdown
          coordinates={coordinates}
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
