"use strict";

function greet() {
  alert("Hello!");
}


function powerOfTwoBuiltin(power) {
    return 2 ** power;
}


function powerOfTwoWhileLoop(power) {
    let result = 2;
    let i = 1;
    while (i < power) {
        result = result * 2;
        i = i + 1;
    }
    return result;
}


function powerOfTwoWhileLoopConcise(power) {
    let result = 1;
    while (power > 0) {
        result *= 2;
        power--;
    }
    return result;
}


function powerOfTwoForLoop(power) {
    let result = 1;
    for (let i = 1; i <= power; i++) {
        result *= 2;
    }
    return result;
}


console.log('2^3 built in:', powerOfTwoBuiltin(3));
console.log('2^3 while loop:', powerOfTwoWhileLoop(3));
console.log('2^3 concise while loop:', powerOfTwoWhileLoopConcise(3));
console.log('2^3 for loop:', powerOfTwoForLoop(3));


function sumOfAllNumbersTill(number) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        result += i;
    }
    return result;
}

console.log('sum of all numbers till 4 = ' + sumOfAllNumbersTill(4));


function sumOfOddNumbersTill(number) {
    let result = 0;
    for (let i = 1; i <= number; i++) {
        if (i % 2 == 0) {
            continue;
        }
        result += i;
    }
    return result;
}

console.log('sum of odd numbers till 4 = ' + sumOfOddNumbersTill(4));

/*
  Open course demo page and type 'playWithDataTypes();' in a browser console
*/
function playWithDataTypes() {
  console.log('play with datatypes');
  
  if ('a' > 'r') {
    console.log("'a' > 'r'");
  } else {
    console.log("'a' isn't greater than 'r', but we can't be sure it's less or equal without looking at the JavaScript specification or some testing");
  }
  
  if ('a' < 'r') {
    console.log("'a' < 'r'");
  }

  if ('a' > 10) {
    console.log('a > 10');
  } else if ('a' < 10) {
    console.log('a < 10');
  } else if ('a' == 10) {
    console.log('a == 10');
  } else {
    console.log('there\'s no point to compare number with string in JS');
  }

  let a = 6;
  a = 'dof';
  // a = 10;

  if(!isNaN(5 * a)){
    console.log(5 * a);
  }

  /* 
  if (NaN == NaN) {
    alert('NaN == NaN');
  }

  if (NaN != NaN) {
    alert('NaN != NaN');
  }
  */

  if (-21314) {
    console.log('non-zero number is converted to true');
  } else {
    console.log('oops');
  }

  if ('dsfaf') {
    console.log('non-empty string is converted to true');
  }

  if (!'') {
    console.log('empty string is converted to false');
  }
  
  console.log("'5' + 2; yields to", '5' + 2, "because 2 is converted to a string");
  console.log("'5' - 2; yields to", '5' - 2, "because '5' is converted to a number");
}
