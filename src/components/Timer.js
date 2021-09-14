import React, { useState, useEffect, useRef } from "react";
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

  const formatTime = (timer) => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return ` ${getMinutes} : ${getSeconds}`;
  };
  return (
    <Navbar.Text>
      <h4 style={{ marginBottom: 0, paddingRight: 20 }}>{formatTime(timer)}</h4>
    </Navbar.Text>
  );
};

export default Timer;
