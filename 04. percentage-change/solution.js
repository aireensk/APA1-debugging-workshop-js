function calculatePercentageChange(original, newAmount) {
  const difference = Math.abs(newAmount - original);
  if (difference === 0){
  return percentage = 0;
  } else if (newAmount < original) {
    percentage = (difference/original)*100;
    return - Math.round(percentage);
  } else {
  percentage = (difference/original)*100;
  return Math.round(percentage);
  }
}

console.log(calculatePercentageChange(100, 80))

module.exports = { calculatePercentageChange };
