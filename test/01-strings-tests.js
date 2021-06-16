const assert = require('assert');
const tasks = require('../tasks/01-strings');

const {
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
} = tasks;

it.optional = require('../helpers/optional');

describe('01-strings-tasks', () => {
  it.optional('concatStrings should return concatenation of two strings', () => {
    assert.equal(concatStrings('aa', 'bb'), 'aabb');
    assert.equal(concatStrings('aa', ''), 'aa');
    assert.equal(concatStrings('', 'bb'), 'bb');
    assert.linesOfCode(concatStrings, 1);
  });

  it.optional('getLength should return the length of string', () => {
    assert.equal(getLength('bbbbb'), 5, "'bbbbb' length should be 5");
    assert.equal(getLength(''), 0, "'' length should be 0");
    assert.linesOfCode(getLength, 1);
  });

  it.optional('getStringFromTemplate should create a string from template using given parameters', () => {
    assert.equal(getStringFromTemplate('Bugs', 'Bunny'), 'Hello, Bugs Bunny!');
    assert.equal(getStringFromTemplate('Mickey', 'Mouse'), 'Hello, Mickey Mouse!');
    assert.linesOfCode(getStringFromTemplate, 1);
  });

  it.optional('extractNameFromTemplate should parse the name from given string', () => {
    assert.equal(extractNameFromTemplate('Hello, Bugs Bunny!'), 'Bugs Bunny');
    assert.equal(extractNameFromTemplate('Hello, Mickey Mouse!'), 'Mickey Mouse');
    assert.linesOfCode(extractNameFromTemplate, 1);
  });

  it.optional('getFirstChar should return the first char from given string', () => {
    assert.equal(getFirstChar('Bugs Bunny'), 'B');
    assert.equal(getFirstChar('dog'), 'd');
    assert.linesOfCode(getFirstChar, 1);
  });



  it.optional('removeLeadingAndTrailingSpaces should remove leading and trailing whitespaces from the string', () => {
    assert.equal(removeLeadingAndTrailingSpaces('  Bugs Bunny'), 'Bugs Bunny');
    assert.equal(removeLeadingAndTrailingSpaces('dog'), 'dog');
    assert.equal(removeLeadingAndTrailingSpaces('\tHello, World! '), 'Hello, World!');
    assert.linesOfCode(removeLeadingAndTrailingSpaces, 1);
  });

  it.optional('repeatString should repeat string specified number of times', () => {
    assert.equal(repeatString('B', 5), 'BBBBB');
    assert.equal(repeatString('dog', 3), 'dogdogdog');
    assert.linesOfCode(repeatString, 1);
  });

  it.optional('removeFirstOccurrences should remove all specified values from a string', () => {
    assert.equal(removeFirstOccurrences('To be or not to be', ' not'), 'To be or to be');
    assert.equal(removeFirstOccurrences('I like legends', 'end'), 'I like legs');
    assert.equal(removeFirstOccurrences('ABABAB', 'BA'), 'ABAB');
    assert.linesOfCode(removeFirstOccurrences, 1);
  });

  it.optional('unbracketTag should remove first and last angle brackets from tag string', () => {
    assert.equal(unbracketTag('<div>'), 'div');
    assert.equal(unbracketTag('<span>'), 'span');
    assert.equal(unbracketTag('<a>'), 'a');
    assert.linesOfCode(unbracketTag, 1);
  });

  it.optional('convertToUpperCase should convert all chars from specified string into upper case', () => {
    assert.equal(convertToUpperCase('Thunderstruck'), 'THUNDERSTRUCK');
    assert.equal(convertToUpperCase('abcdefghijklmnopqrstuvwxyz'), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    assert.linesOfCode(convertToUpperCase, 1);
  });

  it.optional('extractEmails should extract emails from string list delimeted by semicolons', () => {
    assert.deepEqual(
      extractEmails('angus.young@gmail.com;brian.johnson@hotmail.com;bon.scott@yahoo.com'),
      ['angus.young@gmail.com', 'brian.johnson@hotmail.com', 'bon.scott@yahoo.com']
    );
    assert.deepEqual(
      extractEmails('info@gmail.com'),
      ['info@gmail.com']
    );
    assert.linesOfCode(extractEmails, 1);
  });

  it.optional('getRectangleString should return the string reprentation of rectangle with specified size', () => {
    assert.equal(
      getRectangleString(6, 4),
      '┌────┐\n' +
      '│    │\n' +
      '│    │\n' +
      '└────┘\n'
    );
    assert.deepEqual(
      getRectangleString(2, 2),
      '┌┐\n' +
      '└┘\n'
    );
    assert.deepEqual(
      getRectangleString(12, 3),
      '┌──────────┐\n' +
      '│          │\n' +
      '└──────────┘\n'
    );
    assert.linesOfCode(getRectangleString, 4);
  });

  it.optional('isString should return true if argument ia a string', () => {
    assert.equal(isString(), false, 'undefined');
    assert.equal(isString(null), false, 'null');
    assert.equal(isString([]), false,  '[]');
    assert.equal(isString('test'), true, 'test');
    assert.equal(isString(new String('test')), true,  "new String('test')");
    assert.linesOfCode(isString, 1);
  });

  it.optional('Functions from 01-strings-test.js should not use basic loops statements', () => {
    Object.getOwnPropertyNames(tasks)
      .filter(x => tasks[x] instanceof Function)
      .forEach(f => {
        assert(
          !/([;{]\s*(for|while)\s*\()|(\.forEach\s*\()/.test(tasks[f].toString()),
          `Function "${f}" should not use basic loop statements (for, while or Array.forEach)! Please use specialized array methods (Array.map, Array.reduce etc).`
        );
      });
  });
});
