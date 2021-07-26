// Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.
//
// Examples
//  keysAndValues({ a: 1, b: 2, c: 3 }) ➞ [["a", "b", "c"], [1, 2, 3]]
// keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" }) ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]
// keysAndValues({ key1: true, key2: false, key3: undefined }) ➞ [["key1", "key2", "key3"], [true, false, undefined]]

// Notes
// Remember to sort the keys.
function keysAndValues(obj) {
  const newObj = Object.keys(obj).sort().reduce((object, key) => {
    object[key] = obj[key];
    return object;
  }, {});
  return [Object.keys(newObj), Object.values(newObj)];
}

// Create a function that moves all capital letters to the front of a word.
//
// Examples
//  capToFront("hApPy") ➞ "APhpy"
//  capToFront("moveMENT") ➞ "MENTmove"
//  capToFront("shOrtCAKE") ➞ "OCAKEshrt"

// Notes
// Keep the original relative order of the upper and lower case letters the same.
function capToFront(s) {
  const bigLetters = [];
  const smallLetters = [];
  s.split('').forEach(char => {
    if (char.toUpperCase() === char) {
      bigLetters.push(char);
    } else {
      smallLetters.push(char);
    }
  });
  return bigLetters.concat(smallLetters).join('');
}

// Create a function that takes a string and returns the middle character(s). If the word's length is odd, return the middle character. If the word's length is even, return the middle two characters.
//
// Examples
//  getMiddle("test") ➞ "es"
//  getMiddle("testing") ➞ "t"
//  getMiddle("middle") ➞ "dd"
//  getMiddle("A") ➞ "A"

// Notes
//  All test cases contain a single word (as a string).
function getMiddle(str) {
  const middle = str.length / 2;
  return str.length % 2 !== 0 ? str[Math.floor(middle)] : str[middle - 1] + str[middle];
}

// Create a function that takes a number and returns an array with the digits of the number in reverse order.
//
// Examples
//  reverseArr(1485979) ➞ [9, 7, 9, 5, 8, 4, 1]
//  reverseArr(623478) ➞ [8, 7, 4, 3, 2, 6]
//  reverseArr(12345) ➞ [5, 4, 3, 2, 1]
function reverseArr(num) {
  return ('' + num).split('').reverse().map(item => +item);
}

// Create a function that takes a number as an argument and returns a string formatted to separate thousands.
//
// Examples
//  formatNum(1000) ➞ "1,000"
//  formatNum(100000) ➞ "100,000"
//  formatNum(20) ➞ "20"

// Notes
//  You can expect a valid number for all test cases.
function formatNum(num) {
  const arrStr = ('' + num).split('');
  let i = -3;
  while (arrStr.length + i > 0) {
    arrStr.splice(i, 0, ',');
    i -= 4;
  }
  return arrStr.join('');
}

// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
//
// Examples
//  reverse("Reverse") ➞ "esreveR"
//  reverse("This is a typical sentence.") ➞ "This is a lacipyt .ecnetnes"
//  reverse("The dog is big.") ➞ "The dog is big."

// Notes
// You can expect a valid string to be provided for each test case.
function reverse(str) {
  if (str.includes(' ')) {
    const mappedArrStr = str.split(' ').map(item => (item.length >= 5) ? item.split('').reverse().join('') : item);
    return mappedArrStr.join(' ');
  } else {
    return str.split('').reverse().join('');
  }
}

// Usually when you sign up for an account to buy something, your credit card number, phone number or answer to a secret question is partially obscured in some way. Since someone could look over your shoulder, you don't want that shown on your screen. Hence, the website masks these strings.
// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.
//
// Examples
//  maskify("4556364607935616") ➞ "############5616"
//  maskify("64607935616") ➞ "#######5616"
//  maskify("1") ➞ "1"
//  maskify("") ➞ ""

// Notes
//  The maskify function must accept a string of any length.
//  An empty string should return an empty string (fourth example above).
function maskify(str) {
  if (str === '') {
    return '';
  } else {
    for (let i = 0; i < str.length - 4; i++) {
      str = str.replace(str[i], '#');
    }
    return str;
  }
}

// Write a function that, given a date (in the format MM/DD/YYYY), returns the day of the week as a string. Each day name must be one of the following strings: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", or "Saturday".
// To illustrate, the day of the week for "12/07/2016" is "Wednesday".
// Examples
//  getDay("12/07/2016") ➞ "Wednesday"
//  getDay("09/04/2016") ➞ "Sunday"
//  getDay("12/08/2011") ➞ "Thursday"
// Notes
//  This challenge assumes the week starts on Sunday.
function getDay(day) {
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let date = new Date(day).getDay();
  return days[date];
}

// Given a fraction frac (given in the format "1/2" for example) and n number of decimal places, return a sentence in the following format:
//   "{fraction} rounded to {n} decimal places is {answer}"
//
// Examples
//  fracRound("1/3", 5) ➞ "1/3 rounded to 5 decimal places is 0.33333"
//  fracRound("2/8", 4) ➞ "2/8 rounded to 4 decimal places is 0.2500"
//  fracRound("22/7", 2) ➞ "22/7 rounded to 2 decimal places is 3.14"

// Notes
//  Add trailing zeros if n is greater than the actual number of decimal places the fraction has (see example #2).
//  Numbers greater than one may be given as top-heavy fractions (no mixed numbers).
//  n won't be 1 because that would cause "decimal places" to be "decimal place", making the challenge more cumbersome than it needs to be.
function fracRound(frac, n) {
  const arr = frac.split('/');
  const result = (arr[0] / arr[1]).toFixed(n);
  return `${frac} rounded to ${n} decimal places is ${result}`;
}

// Create a function that accepts a string and returns true if it's in the format of a proper phone number and false if it's not. Assume any number between 0-9 (in the appropriate spots) will produce a valid phone number.
// This is what a valid phone number looks like:
//   (123) 456-7890

// Examples
//  isValidPhoneNumber("(123) 456-7890") ➞ true
//  isValidPhoneNumber("1111)555 2345") ➞ false
//  isValidPhoneNumber("098) 123 4567") ➞ false

// Notes
// Don't forget the space after the closing parentheses.
function isValidPhoneNumber(str) {
  let validPhoneExample = '(000) 000-0000';
  let bool;
  if (validPhoneExample.length === str.length) {
    for (let i = 0; i < str.length; i++) {
      if (isNaN(parseInt(str[i])) === isNaN(parseInt(validPhoneExample[i]))) {
        if (isNaN(parseInt(str[i])) &&
        str[i] === validPhoneExample[i]) {
          bool = true;         
        }
      } 
    }
  } else {
    bool = false;
  }
  return bool;
}

console.log(isValidPhoneNumber('(123) 456-7890'));
console.log(isValidPhoneNumber('(123)456-7890'));
console.log(isValidPhoneNumber('(519) 505-6498'));
console.log(isValidPhoneNumber('abc(123) 456-7890abc'));
console.log(isValidPhoneNumber('(123)456-7890abc'));
console.log(isValidPhoneNumber('(123)_456-7890'));
console.log(isValidPhoneNumber('(098) 123 4567'));

module.exports = {
  keysAndValues,
  capToFront,
  getMiddle,
  reverseArr,
  formatNum,
  reverse,
  maskify,
  getDay,
  fracRound,
  isValidPhoneNumber
}
