// print a triangle with a #

function triangle() {
  let triangle = "";
  for (let i = 0; i < 7; i++) {
    triangle += "#";
    console.log(triangle);
  }
}
triangle();
//fizbuzz exercise

function fizbuzz() {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizbuzz();
//chessboard Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

function chessboard(size) {
  let board = "";
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if ((i + j) % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
    }
    board += "\n";
  }
  console.log(board);
}

chessboard(8);

//minimun Define the function min that takes two arguments and returns their minimum.

function minimum(a, b) {
  if (a > b) {
    return b;
  }
  if (b > a) {
    return a;
  }
}

console.log(minimum(2, 4));
console.log(minimum(8, 4));
console.log(minimum(200, 18642));

// a recursive function to determine is a number is even or odd

function isEven(x) {
  if (x === 0) {
    return true;
  } else if (x === 1) {
    return false;
  } else if (x < 0) {
    return isEven(-x);
  } else {
    return isEven(x - 2);
  }
}

// functon countBs that takes a string as its only argument and returns the number of uppercase "B" characters in the string

function countBs(string) {
  let count = 0;
  for (const char of string) {
    if (char === "B") {
      count++;
    }
  }
  return count;
}

// function countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase "B" characters). Rewrite countBs to make use of this new function.
function countChar(string, char) {
  let count = 0;
  for (const letter of string) {
    if (letter === char) {
      count++;
    }
  }
  return count;
}
