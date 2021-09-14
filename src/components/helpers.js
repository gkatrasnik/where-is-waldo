export const msToTime = (ms) => {
  let seconds = (ms / 1000).toFixed(3);
  let minutes = (ms / (1000 * 60)).toFixed(1);
  let hours = (ms / (1000 * 60 * 60)).toFixed(1);
  let days = (ms / (1000 * 60 * 60 * 24)).toFixed(1);
  if (seconds < 60) return seconds + " s";
  else if (minutes < 60) return minutes + " min";
  else if (hours < 24) return hours + " h";
  else return days + " Days";
};

export const formatTime = (timer) => {
  const getSeconds = `0${timer % 60}`.slice(-2);
  const minutes = `${Math.floor(timer / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

  return ` ${getMinutes} : ${getSeconds}`;
};
