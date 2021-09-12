import { React, useState, useEffect } from "react";
import Picture from "./components/Picture";
import Topbar from "./components/Topbar";
import { characters } from "./components/Characters";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StartModal from "./components/StartModal";
import { db } from "./components/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [showStartModal, setShowStartModal] = useState(true);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [charactersArray, setCharactersArray] = useState(["dummy"]);
  const [resultsData, setResultsData] = useState([]);
  const [player, setPlayer] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);

  useEffect(() => {
    setCharactersArray(characters);
  }, []);

  useEffect(() => {
    if (charactersArray) {
      checkGameOver();
    }
  }, [charactersArray]);

  const setWindowSize = () => {
    setWindowWidth(document.body.clientWidth);
    setWindowHeight(document.body.clientHeight);
    console.log(
      " body size",
      document.body.clientWidth,
      document.body.clientHeight
    );
  };

  const getResultsData = async () => {
    let array = [];
    const querySnapshot = await getDocs(collection(db, "results"));
    querySnapshot.forEach((doc) => {
      array.push(doc.data());
    });
    setResultsData(array);
  };

  const toggleShowStartModal = () => {
    setShowStartModal(!showStartModal);
  };

  const toggleShowGameOverModal = () => {
    setShowGameOverModal(!showGameOverModal);
  };

  const handleStartModalSubmit = (e, playerName) => {
    e.preventDefault();
    setPlayer(playerName);
  };

  const handleFoundCharacter = (item) => {
    const index = item.id;
    let newArray = charactersArray.filter((item) => item.id !== index);
    setCharactersArray(newArray);
    console.log(newArray);
  };

  const checkGameOver = () => {
    console.log("check game over", charactersArray);
    if (charactersArray.length === 0) {
      setShowGameOverModal(true);
    }
  };

  const picStyle = {
    overflow: "hidden",
  };

  return (
    <>
      <StartModal
        getResultsData={getResultsData}
        showStartModal={showStartModal}
        toggleShowStartModal={toggleShowStartModal}
        handleStartModalSubmit={handleStartModalSubmit}
      />
      <Leaderboard
        showGameOverModal={showGameOverModal}
        toggleShowGameOverModal={toggleShowGameOverModal}
        resultsData={resultsData}
      />
      <Topbar
        charactersArray={charactersArray}
        toggleShowStartModal={toggleShowStartModal}
        toggleShowGameOverModal={toggleShowGameOverModal}
        player={player}
      />
      <Picture
        style={picStyle}
        charactersArray={charactersArray}
        handleFoundCharacter={handleFoundCharacter}
        checkGameOver={checkGameOver}
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        characters={charactersArray}
        setWindowSize={setWindowSize}
      />
    </>
  );
}

export default App;
