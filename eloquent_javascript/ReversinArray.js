// reversing an array

function reverseArray(array) {
  let reversedArray =  [];
  for (let element of array) {
    reversedArray.unshift(element);
  }
  return reversedArray;
}

function reverseArrayInPlace(array) {
 for (let i =0; i <array.length; i++) {
  array.splice(i,0,array.pop());
 }
 return array;
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArrayInPlace(["A", "B", "C"]));