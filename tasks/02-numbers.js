// Create a function that takes numbers b and m as arguments and returns the derivative of the function f(x)=x^b with respect to x evaluated at x=m, where b and m are constants.
//
// Examples
//  derivative(1, 4) ➞ 1
//  derivative(3, -2) ➞ 12
//  derivative(4, -3) ➞ -108

// Notes
//  ^ in the context of this challenge means "to the power of", also known as the "exponent" operator.
function derivative(b, m) {
  throw new Error('Not implemented');
}

// Create a function that validates whether a number n is within the bounds of lower and upper. Return false if n is not an integer.
//
// Examples
//  intWithinBounds(3, 1, 9) ➞ true
//  intWithinBounds(6, 1, 6) ➞ false
//  intWithinBounds(4.5, 3, 8) ➞ false

// Notes
//  The term "within bounds" means a number is considered equal or greater than a lower bound and lesser (but not equal) to an upper bound, (see example #2).
//  Bounds will be always given as integers.
function intWithinBounds(n, lower, upper) {
  throw new Error('Not implemented');
}

// Create a function that squares every digit of a number.
//
// Examples
//  squareDigits(9119) ➞ 811181
//  squareDigits(2483) ➞ 416649
//  squareDigits(3212) ➞ 9414

// Notes
// The function receives an integer and must return an integer.
function squareDigits(n) {
  throw new Error('Not implemented');
}

// Write a program that takes a temperature input in celsius and converts it to Fahrenheit and Kelvin. Return the converted temperature values in an array.
// The formula to calculate the temperature in Fahrenheit from Celsius is:
//   F = C*9/5 +32
// The formula to calculate the temperature in Kelvin from Celsius is:
//   K = C + 273.15

// Examples
//  tempConversion(0) ➞ [32, 273.15]
//  0°C is equal to 32°F and 273.15 K.
//  tempConversion(100) ➞ [212, 373.15]
//  tempConversion(-10) ➞ [14, 263.15]
//  tempConversion(300.4) ➞ [572.72, 573.55]

// Notes
//  Return calculated temperatures up to two decimal places.
//  Return "Invalid" if K is less than 0.
function tempConversion(celsius) {
  throw new Error('Not implemented');
}

// Create a function that takes a number num and returns its double factorial.
//
// Examples
//  doubleFactorial(0) ➞ 1
//  doubleFactorial(2) ➞ 2
//  doubleFactorial(9) ➞ 945
//    9*7*5*3*1 = 945
//  doubleFactorial(14) ➞ 645120

// Notes
//  Assume all input values are greater than or equal to -1.
//  Try to solve it with recursion.
//  Double factorial is not the same as factorial * 2.
function doubleFactorial(num) {
  throw new Error('Not implemented');
}

// Count Ones in Binary Representation of Integer
// Count the amount of ones in the binary representation of an integer. For example, since 12 is 1100 in binary, the return value should be 2.
//
// Examples
//  countOnes(0) ➞ 0
//  countOnes(100) ➞ 3
//  countOnes(999) ➞ 8

// Notes
//  The input will always be a valid integer (number).
function countOnes(i) {
  throw new Error('Not implemented');
}

// Create a function that takes an integer n and reverses it.
//
// Examples
//  rev(5121) ➞ "1215"
//  rev(69) ➞ "96"
//  rev(-122157) ➞ "751221"

// Notes
//  This challenge is about using two operators that are related to division.
//  If the number is negative, treat it like it's positive.
function rev(n) {
  throw new Error('Not implemented');
}

// Given a two digit number, return true if that number contains one even and one odd digit.
//
// Examples
//  oneOddOneEven(12) ➞ true
//  oneOddOneEven(55) ➞ false
//  oneOddOneEven(22) ➞ false
function oneOddOneEven(n) {
  throw new Error('Not implemented');
}

// Given a number, n, return a function which adds n to the number passed to it.
//
// Examples
//  add(10)(20) ➞ 30
//  add(0)(20) ➞ 20
//  add(-30)(80) ➞ 50
//
// Notes
//  All numbers used in the tests will be integers (whole numbers).
//  Returning a function from a function is a key part of understanding higher order functions (functions which operate on and return functions).
function add(n) {
  throw new Error('Not implemented');
}

// Given two integers a and b, return how many times a can be halved while still being greater than b.
//
// Examples
//  halveCount(1324, 98) ➞ 3
//  halveCount(624, 8) ➞ 6
//  halveCount(1000, 3) ➞ 8

// Notes
//  Integer a will always be able to be halved at least once in every test case.
function halveCount(a, b) {
  throw new Error('Not implemented');
}

module.exports = {
  derivative,
  intWithinBounds,
  squareDigits,
  tempConversion,
  doubleFactorial,
  countOnes,
  rev,
  oneOddOneEven,
  add,
  halveCount
};
