import React, { useState, useEffect, useRef } from "react";
import { formatTime } from "./helpers";
import { Navbar } from "react-bootstrap";

const Timer = (props) => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const countRef = useRef(null);

  useEffect(() => {
    if (props.player && props.gameStartTime) {
      handleStart();
    }
  }, [props.player, props.gameStartTime]);

  useEffect(() => {
    if (!props.gameTime) {
      handlePause();
    }
  }, [props.gameTime]);

  const handleStart = () => {
    setIsActive(true);

    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const handlePause = () => {
    clearInterval(countRef.current);
    setTimer(0);
    setIsActive(false);
  };

  return (
    <Navbar.Text>
      <h4 style={{ marginBottom: 0, paddingRight: 20 }}>{formatTime(timer)}</h4>
    </Navbar.Text>
  );
};

export default Timer;
