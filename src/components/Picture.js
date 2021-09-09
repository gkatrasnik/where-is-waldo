import React from "react";
import picture from "../assets/picture.jpg";
import { Image } from "react-bootstrap";
import "../styles/picture.css";

function Picture() {
  return <Image src={picture} className="picture" />;
}

export default Picture;
