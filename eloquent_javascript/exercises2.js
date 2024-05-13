// the sum of a range

function range(start, end, step) {
  let resultArray = [];
  for (let i = start; i <= end; i += step? step : 1) {
    resultArray.push(i);
  }
  return resultArray;
}

console.log(range(1, 10));
console.log(range(1, 10, 2));

function sum(array) {
  let totalSum = 0;
  for (let number of array) {
    totalSum += number;
  }
  return totalSum;
}          

console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));