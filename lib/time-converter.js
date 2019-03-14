function timeConverter (time) {
  if (isNaN(time)) return NaN;
  if (!Number.isInteger(time)) return NaN;

  const hours = Math.floor(time / 3600);
  const minutes = Math.floor(time % 3600 / 60);
  const seconds = Math.floor(time % 3600 % 60);

  const hoursDisplay = hours > 0 ? hours : 0;
  const minutesDisplay = minutes > 0 ? minutes : 0;
  const secondsDisplay = seconds > 0 ? seconds : 0;

  const timeDisplay = hoursDisplay + ':' + minutesDisplay + ':' + secondsDisplay;
  return timeDisplay;
}

module.exports = timeConverter;
