import { React, useState } from "react";
import Picture from "./components/Picture";
import Topbar from "./components/Topbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import StartModal from "./components/StartModal";

function App() {
  const [showStartModal, setShowStartModal] = useState(true);
  const [player, setPlayer] = useState(null);

  const toggleShowStartModal = () => {
    setShowStartModal(!showStartModal);
  };

  const handleStartModalSubmit = (e, playerName) => {
    e.preventDefault();
    setPlayer(playerName);
    console.log(playerName);
  };

  return (
    <>
      <StartModal
        showStartModal={showStartModal}
        toggleShowStartModal={toggleShowStartModal}
        handleStartModalSubmit={handleStartModalSubmit}
      />
      <Topbar toggleShowStartModal={toggleShowStartModal} player={player} />
      <Picture />
    </>
  );
}

export default App;
