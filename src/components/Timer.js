import React, { useState, useEffect, useRef } from "react";
import { formatTime } from "./helpers";
import { Navbar } from "react-bootstrap";

const Timer = (props) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isStopped, setIsStopped] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    console.log(props.player, props.gameStartTime);
    if (props.player && props.gameStartTime) {
      handleStart();
    }
  }, [props.player, props.gameStartTIme]);

  useEffect(() => {
    if (props.gameTime) {
      handlePause();
    }
  }, [props.gameTime]);

  const handleStart = () => {
    setIsActive(true);
    setIsStopped(true);
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setIsStopped(false);
  };

  return (
    <Navbar.Text>
      <h4 style={{ marginBottom: 0, paddingRight: 20 }}>{formatTime(timer)}</h4>
    </Navbar.Text>
  );
};

export default Timer;
