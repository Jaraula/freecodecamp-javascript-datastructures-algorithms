function rangeOfNumbers(startNum, endNum) {
  return startNum == endNum
    ? [startNum]
    : [...rangeOfNumbers(startNum, endNum - 1), endNum];
}

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));
