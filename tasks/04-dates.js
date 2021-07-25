// Create a function that takes the month and year (as integers) and returns the number of days in that month.
//
// Examples
//  days(2, 2018) ➞ 28
//  days(4, 654) ➞ 30
//  days(2, 200) ➞ 28
//  days(2, 1000) ➞ 28

// Notes
//  Don't forget about leap years!
function days(month, year) {
  throw new Error('Not implemented');
}

// Given the month and year as numbers, return whether that month contains a Friday 13th.
//
// Examples
//  hasFriday13(3, 2020) ➞ true
//  hasFriday13(10, 2017) ➞ true
//  hasFriday13(1, 1985) ➞ false

// Notes
//  January will be given as 1, February as 2, etc ...
function hasFriday13(month, year) {
  throw new Error('Not implemented');
}

// Create a function that converts dates from one of five string formats:
//  "January 9, 2019" (MM D, YYYY)
//  "Jan 9, 2019" (MM D, YYYY)
//  "01/09/2019" (MM/DD/YYYY)
//  "01-09-2019" (MM-DD-YYYY)
//  "01.09.2019" (MM.DD.YYYY)
//  The return value will be an array formatted like: [MM, DD, YYYY], where MM, DD, and YYYY are all integers. Using the examples above:
//
// Examples
//  convertDate("January 9, 2019") ➞ [1, 9, 2019]
//  convertDate("Jan 9, 2019") ➞ [1, 9, 2019]
//  convertDate("01/09/2019") ➞ [1, 9, 2019]
//  convertDate("01-09-2019") ➞ [1, 9, 2019]
//  convertDate("01.09.2019") ➞ [1, 9, 2019]

// Notes
//  You can solve this any number of ways, but using JavaScript's new Date() method is probably the easiest. Check the Resources tab for documentation.
function convertDate(date) {
  throw new Error('Not implemented');
}

// The 2nd of February 2020 is a palindromic date in both dd/mm/yyyy and mm/dd/yyyy format (02/02/2020). Given a date in dd/mm/yyyy format, return true if the date is palindromic in both date formats, otherwise return false.
//
// Examples
//  palindromicDate("02/02/2020") ➞ true
//  palindromicDate("11/12/2019") ➞ false
//  palindromicDate("11/02/2011") ➞ false
// Although 11/02/2011 is palindromic in dd/mm/yyyy format,
// it isn't in mm/dd/yyyy format (02/11/2011)

// Notes
//  All dates will be valid in both date formats.
//  The date must be palindromic in both dd/mm/yyyy and mm/dd/yyyy formats to pass.
function palindromicDate(date) {
  throw new Error('Not implemented');
}

// Given a date, return how many days date is away from 2021 (end date not included). date will be in mm/dd/yyyy format.
//
// Examples
//  daysUntil2021("12/28/2020") ➞ "3 days"
//  daysUntil2021("1/1/2020") ➞ "366 days"
//  daysUntil2021("2/28/2020") ➞ "308 days"

// Notes
//  All given dates will be in the year 2020.
function daysUntil2021(date) {
  throw new Error('Not implemented');
}

// Given a Date() object, return the date from three days prior as a string: "2016-01-19".
//
// Examples
//  threeDaysAgo(new Date(2018, 0, 1)) ➞ "2017-12-29"
//  threeDaysAgo(new Date(2015, 5, 17)) ➞ "2015-06-14"
//  threeDaysAgo(new Date(1965, 3, 15))➞ "1965-04-12"

// Notes
//  Your function must work in the past, present and future.
//  JavaScript months are zero based.
//  Your output should NOT be zero based: 2016, 0, 19 == "2016-01-19".
function threeDaysAgo(date) {
  throw new Error('Not implemented');
}

// Create a function that takes a date object and return string in the following format:
// YYYYMMDDHHmmSS
// The format should contain a 4 digit year, 2 digit month, 2 digit day, 2 digit hour(00-23), 2 digit minute and 2 digit second. If any of the value has only signle digit, you must use zero prefix, so that the result string length is always same.
//
// Examples
//  formatDate(new Date(2020, 6, 4, 8, 0, 0)) ➞ "20200704080000"
//  formatDate(new Date(2019, 11, 31, 23, 59, 59)) ➞ "20191231235959"
//  formatDate(new Date(2020, 6, 4)) ➞ "20200704000000"

// Notes
//  Assume Date year input will always be greater than 1970.
//  Try not to rely on default Date.toString() output in your impelementation.
//  Be aware that the Date's month field is zero based (0 is January and 11 is December).
function formatDate(date) {
  throw new Error('Not implemented');
}

// Create a function which takes in a date as a string, and returns the date a week after.
//
// Examples
//  weekAfter("12/03/2020") ➞ "19/03/2020"
//  weekAfter("21/12/1989") ➞ "28/12/1989"
//  weekAfter("01/01/2000") ➞ "08/01/2000"

// Notes
//  Note that dates will be given in day/month/year format.
//  Single digit numbers should be zero padded.
//  See Resources for some helpful tutorials on JavaScript dates.
function weekAfter(d) {
  throw new Error('Not implemented');
}

// Create a function that converts 12-hour time to 24-hour time or vice versa. Return the output as a string.
//
// Examples
//  convertTime("12:00 am") ➞ "0:00"
//  convertTime("6:20 pm") ➞ "18:20"
//  convertTime("21:00") ➞ "9:00 pm"
//  convertTime("5:05") ➞ "5:05 am"

// Notes
//  A 12-hour time input will be denoted with an am or pm suffix.
//  A 24-hour input time contains no suffix.
function convertTime(time) {
  throw new Error('Not implemented');
}

// Each year has 365 or 366 days. Given a string date representing a Gregorian calendar date formatted as month/day/year, return the day-number of the year.
//
// Examples
//  dayOfYear("12/13/2020") ➞ 348
//  dayOfYear("12/17/2020") ➞ 352
//  dayOfYear("11/16/2020") ➞ 321
//  dayOfYear("1/9/2019") ➞ 9
//  dayOfYear("3/1/2004") ➞ 61
//  dayOfYear("12/31/2000") ➞ 366

// Notes
//  All input strings in the tests are valid dates.
function dayOfYear(date) {
  throw new Error('Not implemented');
}

module.exports = {
  days,
  hasFriday13,
  convertDate,
  palindromicDate,
  daysUntil2021,
  threeDaysAgo,
  formatDate,
  weekAfter,
  convertTime,
  dayOfYear
};
