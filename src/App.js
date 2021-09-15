import { React, useState, useEffect } from "react";
import Picture from "./components/Picture";
import Topbar from "./components/Topbar";
import { characters } from "./components/Characters";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StartModal from "./components/StartModal";
import { db } from "./components/Firebase";
import {
  collection,
  query,
  addDoc,
  getDocs,
  Timestamp,
  orderBy,
  limit,
} from "firebase/firestore";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [showStartModal, setShowStartModal] = useState(true);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [charactersArray, setCharactersArray] = useState(null);
  const [foundSquares, setFoundSquares] = useState([]);
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
  };

  const startGame = () => {
    let gameStartTime = Timestamp.now().toMillis();
    setGameStartTime(gameStartTime);
  };

  const endGame = () => {
    let gameEndTime = Timestamp.now().toMillis();
    let gameTime = gameEndTime - gameStartTime;
    setGameTime(gameTime);
    postResult(player, gameTime);
  };

  const playAgain = () => {
    setCharactersArray(characters);
    setShowGameOverModal(false);
    setShowStartModal(true);
    setGameTime(null);
    setGameStartTime(null);
    setFoundSquares([]);
  };

  const postResult = async (player, time) => {
    const docRef = await addDoc(collection(db, "results"), {
      playerName: player,
      time: time,
    });
  };

  const getResultsData = async () => {
    let array = [];
    const resultsRef = collection(db, "results");
    const q = query(resultsRef, orderBy("time"), limit(10));
    const querySnapshot = await getDocs(q);
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

  return (
    <>
      <StartModal
        showStartModal={showStartModal}
        player={player}
        startGame={startGame}
        toggleShowStartModal={toggleShowStartModal}
        handleStartModalSubmit={handleStartModalSubmit}
      />
      <Leaderboard
        gameTime={gameTime}
        showGameOverModal={showGameOverModal}
        resultsData={resultsData}
        toggleShowGameOverModal={toggleShowGameOverModal}
        playAgain={playAgain}
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
        charactersArray={charactersArray}
        windowWidth={windowWidth}
        windowHeight={windowHeight}
        characters={charactersArray}
        foundSquares={foundSquares}
        setFoundSquares={setFoundSquares}
        setWindowSize={setWindowSize}
        handleFoundCharacter={handleFoundCharacter}
        checkGameOver={checkGameOver}
      />
    </>
  );
}

export default App;
