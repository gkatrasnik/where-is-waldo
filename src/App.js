import { React, useState, useEffect } from "react";
import Picture from "./components/Picture";
import Topbar from "./components/Topbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StartModal from "./components/StartModal";
import { db } from "./components/Firebase";
import { collection, getDocs } from "firebase/firestore";
import Leaderboard from "./components/Leaderboard";

function App() {
  const [showStartModal, setShowStartModal] = useState(true);
  const [showGameOverModal, setShowGameOverModal] = useState(false);
  const [resultsData, setResultsData] = useState([]);
  const [player, setPlayer] = useState(null);

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
        toggleShowStartModal={toggleShowStartModal}
        toggleShowGameOverModal={toggleShowGameOverModal}
        player={player}
      />
      <Picture />
    </>
  );
}

export default App;
