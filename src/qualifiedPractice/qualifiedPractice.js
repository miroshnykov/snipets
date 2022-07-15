/**
 * Write a function that counts how many different ways you can make
 * change for an amount of money, given an array of coin denominations.
 *
 * The order of coins does not matter
 */
function countChange(money, coins) {
  let waysOfDoingNcents = [];
  for (let i = 0; i <= money; i++)
    waysOfDoingNcents[i] = 0;

  waysOfDoingNcents[0] = 1;
  for (let j = 0; j < coins.length; j++) {
    let denomination = coins[j];

    for (let higherAmount = denomination; higherAmount <= money; higherAmount++) {
      let higherAmountRemainder = higherAmount - denomination;
      waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
    }
  }
  return waysOfDoingNcents[money];
}
console.log(countChange(10, [5, 2, 3]));


/**
 * Given a non-negative integer, return an array or a list
 * of the individual digits in order
 */
function digitize(number) {
  let strNumber = number.toString();
  let numberArray = [];

  for (let value of strNumber)
    numberArray.push(Number(value));

  return numberArray;
}
console.log(digitize(123));

function _digitize(number) {
  let numberArray =
    number.toString(10)
      .replace(/\D/g, '0')
      .split('')
      .map(Number);

  return numberArray;
}
console.log(_digitize(8675309));

/**
 * Write a mySort function which takes in an array integers, and should return
 * an array of the inputed integers sorted such that the odd numbers come first
 * and even numbers come last.
 */

function mySort(numbers) {
  let evenArray = [], oddArray = [];

  for (let i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      if ((numbers[i] % 2) === 1)
        oddArray.push(parseInt(numbers[i]));
      else
        evenArray.push(parseInt(numbers[i]));
    }
  }

  let result = oddArray.sort((a,b) => a - b).concat(evenArray.sort((a,b) => a - b));
  return result;
}
console.log(mySort([90, 45, 66, 'bye', 100.5]));


/**
 * Given two numbers X and Y, write a function that:
 * 1. returns even numbers btw X & Y, if X > Y, else
 * 2. returns odd numbers btw X & Y
 */
const number_game = (x, y) => {
  let numberArray = [];

  if (x > y) {
    for (let i = y; i < x; i++)
      numberArray.push(i);
    return numberArray.filter(numbers => numbers % 2 === 0);
  } else {
    for (let i = x; i < y; i++)
      numberArray.push(i);
    return numberArray.filter(numbers => numbers % 2 !== 0);
  }
};
console.log(number_game(12, 0));

const _number_game = (x, y) => {
  const min = Math.min(x, y), max = Math.max(x, y);

  return Array.from(Array(max - min), (_, i) => i + min)
    .slice(1)
    .filter(v => v % 2 === (x < y));
};
console.log(_number_game(0, 12));


/**
 * Finish the function numberToOrdinal, which should take a number and
 * return it as a string with the correct ordinal indicator suffix.
 * For example, 1 turns to "1st".
 */
function numberToOrdinal(number) {
  let res = '';
  if (number === 0) return res = String(n);

  switch (number % 10) {
    case 1:
      if (n === 11) return res = `${number}th`;
      res = `${number}st`;
      break;
    case 2:
      if (number === 12) return res = `${number}th`;
      res = `${number}nd`;
      break;
    case 3:
      if (number === 13) return res = `${number}th`;
      res = `${number}rd`;
      break;
    default:
      res = `${number}th`;
      break;
  }
  return res;
}


function power(base, exponent) {
  if (exponent == 0)
    return 1;
  else
    return base * power(base, (exponent - 1));
}