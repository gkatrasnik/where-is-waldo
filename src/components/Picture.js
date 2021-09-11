import { React, useState, useEffect } from "react";
import CharactersDropdown from "./CharactersDropdown";
import picture from "../assets/picture.jpg";
import { Image, Button } from "react-bootstrap";
import "../styles/picture.css";

function Picture(props) {
  const [showFoundCharacter, setShowFoundCharacter] = useState(false);
  const [coordinates, setCoordinates] = useState([0, 0]);
  const [foundSquares, setFoundSquares] = useState([]);

  useEffect(() => {
    props.characters.map((item) => {
      addFoundSquare(
        item.position[0] * props.windowWidth,
        item.position[1] * props.windowHeight
      );
    });
  }, [props.characters, props.windowHeight, props.windowWidth]);

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
    //const x0 = x - 0.03 * props.windowWidth;
    //const y0 = y - 0.08 * props.windowHeight + 56;
    const squareStyle = {
      position: "absolute",
      left: `${x - 30}px`,
      top: `${y - 30}px`,
      width: 60,
      height: 60,
      border: "4px solid red",
    };
    const newSquare = <div style={squareStyle} key={x + y}></div>;
    if (foundIsCorrect()) {
      setFoundSquares((foundSquares) => [...foundSquares, newSquare]);
    }
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
