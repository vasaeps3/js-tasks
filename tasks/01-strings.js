// Create a function that takes in a number as a string n and returns the number without trailing and leading zeros.
//   Trailing Zeros are the zeros after a decimal point which don't affect the value (e.g. the last three zeros in 3.4000 and 3.04000).
//   Leading Zeros are the zeros before a whole number which don't affect the value (e.g. the first three zeros in 000234 and 000230).
//
// Examples
//  removeLeadingTrailing("230.000") ➞ "230"
//  removeLeadingTrailing("00402") ➞ "402"
//  removeLeadingTrailing("03.1400") ➞ "3.14"
//  removeLeadingTrailing("30") ➞ "30"

// Notes
//  Return a string.
//  If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
//  If the number is 0, 0.0, 000, 00.00, etc... return "0".
function removeLeadingTrailing(n) {
  return parseFloat(n);
}

// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.
//
// Examples
//  removeABC("This might be a bit hard") ➞ "This might e  it hrd"
//  removeABC("hello world!") ➞ null
//  removeABC("") ➞ null

// Notes
//  If the given string does not contain "a", "b", or "c", return null.
function removeABC(str) {
  const newStr = str.split('').reduce((acum, elem) => {
    return ['a', 'b', 'c'].includes(elem) ? acum : acum + elem;
  }, '');
  return (str.length === newStr.length)? null : newStr;
}

// Given a string of numbers separated by a comma and space, return the product of the numbers.
//
// Examples
//  multiplyNums("2, 3") ➞ 6
//  multiplyNums("1, 2, 3, 4") ➞ 24
//  multiplyNums("54, 75, 453, 0") ➞ 0
//  multiplyNums("10, -2") ➞ -20

// Notes
//  Bonus: Try to complete this challenge in one line!
function multiplyNums(nums) {
  const arr =  nums.split(',');
  return arr.reduce((acum, elem, index) =>{
    if(index === 0) return +acum + +elem;
    return acum*elem;
  }, 0);
}

// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits in a string of numbers.
//   If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
//   If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
//   If the sum of both even and odd numbers are equal, return "Even and Odd are the same".
//
// Examples
//  evenOrOdd("22471") ➞ "Even and Odd are the same"
//  evenOrOdd("213613") ➞ "Even and Odd are the same"
//  evenOrOdd("23456") ➞ "Even is greater than Odd"

// Notes
//  The input will be a string of numbers.
function evenOrOdd(str) {
  const sums = str.split('').reduce((acum, elem) =>{
    if(elem%2=== 0) return [acum[0] + +elem, acum[1]];    
    if(elem%2!== 0) return [acum[0], acum[1] + +elem]; 
  }, [0, 0]);  
  switch(true){
  case sums[0]>sums[1] :
    return 'Even is greater than Odd';
  case sums[0]<sums[1] :
    return  'Odd is greater than Even';
  default :
    return 'Even and Odd are the same' ;
  }
}

// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
//
//  To illustrate:
//    123
//    We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.
//
// Examples
//  reverseAndNot(123) ➞ 321123
//  reverseAndNot(152) ➞ 251152
//  reverseAndNot(123456789) ➞ 987654321123456789
//
// Notes
// i is a non-negative integer.
function reverseAndNot(i) {
  return `${i}`.split('').reverse().join('')+i ;
}

// Create a function that takes a string, checks if it has the same number of x's and o's and returns either true or false.
// Return a boolean value (true or false).
// Return true if the amount of x's and o's are the same.
// Return false if they aren't the same amount.
// The string can contain any character.
//   When "x" and "o" are not in the string, return true.
//
// Examples
//  XO("ooxx") ➞ true
//  XO("xooxx") ➞ false
//  XO("ooxXm") ➞ true
//  XO("zpzpzpp") ➞ true
//    Returns true if no x and o.
//  XO("zzoo") ➞ false

// Notes
//  Remember to return true if there aren't any x's or o's.
//  Must be case insensitive.
function XO(str) {
  let sums = 0;
  str.split('').forEach(elem =>{
    if(elem.toLowerCase() === 'o') sums++ ;
    if(elem.toLowerCase() ==='x') sums--;
  });
  return !sums;
}

// Create a function that takes a string as an argument and converts the first character of each word to uppercase. Return the newly formatted string.
//
// Examples
//  makeTitle("This is a title") ➞ "This Is A Title"
//  makeTitle("capitalize every word") ➞ "Capitalize Every Word"
//  makeTitle("I Like Pizza") ➞ "I Like Pizza"
//  makeTitle("PIZZA PIZZA PIZZA") ➞ "PIZZA PIZZA PIZZA"
//
// Notes
//  You can expect a valid string for each test case.
//  Some words may contain more than one uppercase letter (see example #4).
function makeTitle(str) {
  return str.split(' ').reduce((acum, elem, index) =>{
    return `${acum} ${elem[0].toUpperCase()+elem.slice(1)}`.trim();  
  }, '');
}

// Double Letters
// Create a function that takes a word and returns true if the word has two consecutive identical letters.
//
// Examples
//  doubleLetters("loop") ➞ true
//  doubleLetters("yummy") ➞ true
//  doubleLetters("orange") ➞ false
//  doubleLetters("munchkin") ➞ false
function doubleLetters(word) {
  const str = word.split('');
  for(let i=0 ; i< str.length ; i++){
    if(str[i] === str[i+1]) return true;
  }
  return false;
}

// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:
//   When positives and positives interact, they remain positive.
//   When negatives and negatives interact, they remain negative.
//   But when negatives and positives interact, they become neutral, and are shown as the number 0.
// Examples
//  neutralise("--++--", "++--++") ➞ "000000"
//  neutralise("-+-+-+", "-+-+-+") ➞ "-+-+-+"
//  neutralise("-++-", "-+-+") ➞ "-+00"
//
// Notes
// The two strings will be the same length.
function neutralise(s1, s2) {
  const sums = s1.split('').reduce((acum, elem, index)=>{
    return   (s1[index] === s2[index]) ? acum+elem : acum+'0';
  }, '');
  return sums;
}

// Create a function that takes a string str and modifies the given string as per the below examples:
//
// Examples
//  mumbling("MubAshIr") ➞ "M-Uu-Bbb-Aaaa-Sssss-Hhhhhh-Iiiiiii-Rrrrrrrr"
//  mumbling("maTT") ➞ "M-Aa-Ttt-Tttt"
//  mumbling("EdaBit") ➞ "E-Dd-Aaa-Bbbb-Iiiii-Tttttt"
function mumbling(str) {
  return str.split('').reduce((acum, elem, index) =>{
    // eslint-disable-next-line max-len
    return acum + elem[0].toUpperCase() + elem.toLowerCase().repeat(index+1).slice(1)+'-';
  }, '').slice(0, -1);
}

module.exports = {
  removeLeadingTrailing,
  removeABC,
  multiplyNums,
  evenOrOdd,
  reverseAndNot,
  XO,
  makeTitle,
  doubleLetters,
  neutralise,
  mumbling
};
