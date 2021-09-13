import { React, useState, useEffect } from "react";
import Picture from "./components/Picture";
import Topbar from "./components/Topbar";
import { characters } from "./components/Characters";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StartModal from "./components/StartModal";
import { db } from "./components/Firebase";
import { collection, getDocs, addDoc, Timestamp } from "firebase/firestore";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [showStartModal, setShowStartModal] = useState(true);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [charactersArray, setCharactersArray] = useState(["dummy"]);
  const [resultsData, setResultsData] = useState([]);
  const [player, setPlayer] = useState(null);
  const [windowWidth, setWindowWidth] = useState(null);
  const [windowHeight, setWindowHeight] = useState(null);
  const [gameStartTime, setGameStartTime] = useState(null);
  const [gameTime, setGameTime] = useState(null);

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

  const startGame = () => {
    let gameStartTime = Timestamp.now().toMillis();
    setGameStartTime(gameStartTime);
    console.log(gameStartTime);
  };

  const endGame = () => {
    let gameEndTime = Timestamp.now().toMillis();
    let gameTime = gameEndTime - gameStartTime;
    console.log("gametime", gameTime);
    setGameTime(gameTime);
    postResult(player, gameTime);
  };

  const postResult = async (player, time) => {
    const docRef = await addDoc(collection(db, "results"), {
      playerName: player,
      time: time,
    });
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
  };

  const checkGameOver = () => {
    if (charactersArray.length === 0) {
      endGame();
      getResultsData();
      setShowGameOverModal(true);
    }
  };

  const picStyle = {
    overflow: "hidden",
  };

  return (
    <>
      <StartModal
        startGame={startGame}
        showStartModal={showStartModal}
        toggleShowStartModal={toggleShowStartModal}
        handleStartModalSubmit={handleStartModalSubmit}
      />
      <Leaderboard
        gameTime={gameTime}
        showGameOverModal={showGameOverModal}
        resultsData={resultsData}
        toggleShowGameOverModal={toggleShowGameOverModal}
      />
      <Topbar
        gameStartTime={gameStartTime}
        gameTime={gameTime}
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
