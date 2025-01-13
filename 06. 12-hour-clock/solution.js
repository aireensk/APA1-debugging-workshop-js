function convertTo12HourClock(time) {
  const hours = time.slice(0, 2);
  const minutes = time.slice(-2);
  if (hours > 12) {
    return `${parseInt(hours - 12)}:${minutes} PM`;
  } else if (hours == 12) {
    return `${12}:${minutes} PM`;;
  } else if (hours == "00") {
    return `${12}:${minutes} AM`;
  }
  else {
    return `${parseInt(hours)}:${minutes} AM`;
  }
}

module.exports = { convertTo12HourClock };

convertTo12HourClock("12:01");
