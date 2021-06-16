
/** *****************************************************************************************
 *                                                                                          *
 * Plese read the following tutorial before implementing tasks:                             *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String  *
 *                                                                                          *
 ********************************************************************************************/


/**
 * Returns the result of concatenation of two strings.
 *
 * @param {string} value1
 * @param {string} value2
 * @return {string}
 *
 * @example
 *   'aa', 'bb' => 'aabb'
 *   'aa',''    => 'aa'
 *   '',  'bb'  => 'bb'
 */
function concatStrings(value1, value2) {
  throw new Error('Have to implemented');
}

/**
 * Returns the length of string.
 *
 * @param {string} value
 * @return {number}
 *
 * @example
 *   'bbbbb' => 5
 *   'c'     => 1
 *   ''      => 0
 */
function getLength(value) {
  throw new Error('Have to implemented');
}

/**
 * Returns the result of string template and given parameters firstName and lastName.
 * Please do not use concatenation, use template string:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/template_strings
 *
 * @param {string} firstName
 * @param {string} lastName
 * @return {string}
 * 
 * @example
 *   'Bugs','Bunny'   => 'Hello, Bugs Bunny!'
 *   'Mickey','Mouse' => 'Hello, Mickey Mouse!'
 */
function getStringFromTemplate(firstName, lastName) {
  throw new Error('Have to implemented');
}

/**
 * Extracts a name from template string 'Hello, First_Name Last_Name!'.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Hello, Bugs Bunny!' => 'Bugs Bunny'
 *   'Hello, Mickey Mouse!' => 'Mickey Mouse'
 */
function  extractNameFromTemplate(value) {
  throw new Error('Have to implemented');
}


/**
 * Returns a first char of the given string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'Bugs Bunny'  => 'B'
 *   'cat'       => 'c'
 */
function getFirstChar(value) {
  throw new Error('Have to implemented');
}

/**
 * Removes a leading and trailing whitespace characters from string.
 *
 * @param {string} value
 * @return {string}
 *
 * @example
 *   '  Bugs Bunny'    => 'Bugs Bunny'
 *   'dog'              => 'dog'
 *   '\tHello, World! ' => 'Hello, World!'
 */
function removeLeadingAndTrailingSpaces(value) {
  throw new Error('Have to implemented');
}

/**
 * Returns a string that repeated the specified number of times.
 *
 * @param {string} value
 * @param {string} count
 * @return {string}
 *
 * @example
 *   'B', 5   => 'BBBBB'
 *   'dog', 3 => 'dogdogdog'
 */
function repeatString(value, count) {
  throw new Error('Have to implemented');
}

/**
 * Remove the first occurrence of string inside another string
 *
 * @param {string} str
 * @param {string} value
 * @return {string}
 *
 * @example
 *   'To be or not to be', 'not'  => 'To be or to be'
 *   'I like legends', 'end' => 'I like legs',
 *   'ABABAB','BA' => 'ABAB'
 */
function removeFirstOccurrences(str, value)  {
  throw new Error('Have to implemented');
}

/**
 * Remove the first and last angle brackets from tag string
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   '<div>' => 'div'
 *   '<span>' => 'span'
 *   '<a>' => 'a'
 */
function unbracketTag(str) {
  throw new Error('Have to implemented');
}


/**
 * Converts all characters of the specified string into the upper case
 *
 * @param {string} str
 * @return {string}
 *
 * @example
 *   'Thunderstruck' => 'THUNDERSTRUCK'
 *  'abcdefghijklmnopqrstuvwxyz' => 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
 */
function convertToUpperCase(str) {
  throw new Error('Have to implemented');
}

/**
 * Extracts e-mails from single string with e-mails list delimeted by semicolons
 *
 * @param {string} str
 * @return {array}
 *
 * @example
 *   'angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com' =>
 *     ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
 *   'info@gmail.com' => ['info@gmail.com']
 */
function extractEmails(str) {
  throw new Error('Have to implemented');
}

/**
 * Returns the string representation of rectangle with specified width and height
 * using pseudograhic chars
 *
 * @param {number} width
 * @param {number} height
 * @return {string}
 *
 * @example
 *
 *            '┌────┐\n'+
 *  (6,4) =>  '│    │\n'+
 *            '│    │\n'+
 *            '└────┘\n'
 *
 *  (2,2) =>  '┌┐\n'+
 *            '└┘\n'
 *
 *             '┌──────────┐\n'+
 *  (12,3) =>  '│          │\n'+
 *             '└──────────┘\n'
 *
 */
function getRectangleString(width, height) {
  throw new Error('Have to implemented');
}

/**
 * Returns true if the value is string; otherwise false.
 * @param {string} value
 * @return {boolean}
 *
 * @example
 *   isString() => false
 *   isString(null) => false
 *   isString([]) => false
 *   isString({}) => false
 *   isString('test') => true
 *   isString(new String('test')) => true
 */
function isString(value) {
  throw new Error('Have to implemented');
}


module.exports = {
  concatStrings,
  getLength,
  getStringFromTemplate,
  extractNameFromTemplate,
  getFirstChar,
  removeLeadingAndTrailingSpaces,
  repeatString,
  removeFirstOccurrences,
  unbracketTag,
  convertToUpperCase,
  extractEmails,
  getRectangleString,
  isString
};