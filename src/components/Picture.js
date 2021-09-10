import { React, useState, useEffect } from "react";
import CharactersDropdown from "./CharactersDropdown";
import picture from "../assets/picture.jpg";
import { Image, Button } from "react-bootstrap";
import "../styles/picture.css";

function Picture() {
  const [showFoundCharacter, setShowFoundCharacter] = useState(false);
  const [coordinates, setCoordinates] = useState(null);

  const handleClick = (e) => {
    getCoordinates(e);
    setShowFoundCharacter(!showFoundCharacter);
  };

  const closeFoundCharacter = () => {
    setShowFoundCharacter(false);
  };

  const getCoordinates = (e) => {
    let x = e.pageX;
    let y = e.pageY;
    console.log(x, y);
    setCoordinates([x, y]);
  };

  return (
    <>
      <Image onClick={handleClick} src={picture} className="picture" />
      {showFoundCharacter && (
        <CharactersDropdown
          coordinates={coordinates}
          closeFoundCharacter={closeFoundCharacter}
        />
      )}
    </>
  );
}

export default Picture;
