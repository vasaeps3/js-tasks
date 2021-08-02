const assert = require('assert');
const {flatten, zipIt, removeDups, measureDepth, sumTwoSmallestNums, reverseArr, sumArray, filterUnique, matrix, miniPeaks} = require('../tasks/05-arrays');

describe('05-arrays.test', () => {
  it('flatten', () => {
    assert.deepEqual(flatten([[1, 2], [3, 4]]), [1, 2, 3, 4]);
    assert.deepEqual(flatten([['a', 'b'], ['c', 'd']]), ['a', 'b', 'c', 'd']);
    assert.deepEqual(flatten([[true, false], [false, false]]), [true, false, false, false]);
  });

  it('zipIt', () => {
    assert.deepEqual(zipIt(['Elise', 'Mary'], ['John', 'Rick']), [['Elise', 'John'], ['Mary', 'Rick']]);
    assert.deepEqual(zipIt(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh']), "sizes don't match");
    assert.deepEqual(zipIt(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh', 'Tim']), [['Ana', 'Bob'], ['Amy', 'Josh'], ['Lisa', 'Tim']]);
    assert.equal(zipIt(['Ana', 'Amy', 'Lisa', 'Katty'], ['Bob', 'Josh', 'Tim']), "sizes don't match");
    assert.deepEqual(zipIt(['Katty', 'Ana', 'Amy', 'Lisa'], ['Bob', 'Josh', 'Tim', 'Aaron']), [['Katty', 'Bob'], ['Ana', 'Josh'], ['Amy', 'Tim'], ['Lisa', 'Aaron']]);
  });

  it('removeDups', () => {
    assert.deepEqual(removeDups(['John', 'Taylor', 'John']), ['John', 'Taylor']);
    assert.deepEqual(removeDups(['John', 'Taylor', 'John', 'john']), ['John', 'Taylor', 'john']);
    assert.deepEqual(removeDups(['javascript', 'python', 'python', 'ruby', 'javascript', 'c', 'ruby']), ['javascript', 'python', 'ruby', 'c']);
    assert.deepEqual(removeDups([1, 2, 2, 2, 3, 2, 5, 2, 6, 6, 3, 7, 1, 2, 5]), [1, 2, 3, 5, 6, 7]);
    assert.deepEqual(removeDups(['#', '#', '%', '&', '#', '$', '&']), ['#', '%', '&', '$']);
    assert.deepEqual(removeDups([3, 'Apple', 3, 'Orange', 'Apple']), [3, 'Apple', 'Orange']);
  });

  it('measureDepth', () => {
    assert.equal(measureDepth([]), 1);
    assert.equal(measureDepth([[]]), 2);
    assert.equal(measureDepth([[[]]]), 3);
    assert.equal(measureDepth([[[[[[]]]]]]), 6);
    assert.equal(measureDepth([[[[[[[[]]]]]]]]), 8);
    assert.equal(measureDepth([[[[[[[[[[[[[]]]]]]]]]]]]]), 13);
    assert.equal(measureDepth([[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]), 17);
    assert.equal(measureDepth([[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]), 18);
  });

  it('sumTwoSmallestNums', () => {
    assert.equal(sumTwoSmallestNums([19, 5, 42, 2, 77]), 7);
    assert.equal(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453]), 3453455);
    assert.equal(sumTwoSmallestNums([2, 9, 6, -1]), 8);
    assert.equal(sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587]), 563);
    assert.equal(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385]), 4519);
    assert.equal(sumTwoSmallestNums([280, 134, 108]), 242);
    assert.equal(sumTwoSmallestNums([280, 134, 108, 1]), 109);
    assert.equal(sumTwoSmallestNums([321, 406, -176]), 727);
    assert.equal(sumTwoSmallestNums([1, 1, 1, 1]), 2);
    assert.equal(sumTwoSmallestNums([-1, -1, 1, 1]), 2);
  });

  it('reverseArr', () => {
    assert.deepEqual(reverseArr(1485979), [9, 7, 9, 5, 8, 4, 1]);
    assert.deepEqual(reverseArr(623478), [8, 7, 4, 3, 2, 6]);
    assert.deepEqual(reverseArr(12345), [5, 4, 3, 2, 1]);
    assert.deepEqual(reverseArr(202069), [9, 6, 0, 2, 0, 2]);
  });

  it('sumArray', () => {
    assert.equal(sumArray([1, 2, 3]), 6);
    assert.equal(sumArray([1, [1, 2], [3, 1]]), 8);
    assert.equal(sumArray([[1, 1], [2, 8], 8]), 20);
    assert.equal(sumArray([1, 2]), 3);
    assert.equal(sumArray([1, [2, [1]], 3]), 7);
  });

  it('filterUnique', () => {
    assert.deepEqual(filterUnique(['abb', 'abc', 'abcdb', 'aea', 'bbb']), ['abc']);
    assert.deepEqual(filterUnique(['88', '999', '989', '9988', '9898']), []);
    assert.deepEqual(filterUnique(['ABCDE', 'DDEB', 'BED', 'CCA', 'BAC']), ['ABCDE', 'BED', 'BAC']);
    assert.deepEqual(filterUnique(['qrrs', 'srrq', 'qqrs', 'qq', 'ss', 'rs']), ['rs']);
    assert.deepEqual(filterUnique(['abab', 'ba', 'ab', 'cc']), ['ba', 'ab']);
  });

  it('matrix', () => {
    assert.deepEqual(matrix(3, 4, 0), [[0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]);
    assert.deepEqual(matrix(2, 3, '#'), [['#', '#', '#'], ['#', '#', '#']]);
    assert.deepEqual(matrix(2, 3, -4), [[-4, -4, -4], [-4, -4, -4]]);
    assert.deepEqual(matrix(1, 2, 0), [[0, 0]]);
  });

  it('miniPeaks', () => {
    assert.deepEqual(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]), [5, 9]);
    assert.deepEqual(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]), [2, 3, 5]);
    assert.deepEqual(miniPeaks([1, 2, 3, 4, 5, 6]), []);
    assert.deepEqual(miniPeaks([6, 4, 3]), []);
    assert.deepEqual(miniPeaks([1, 1, 1, 1, 2, 1, 1, 1]), [2]);
    assert.deepEqual(miniPeaks([1, 9, 1, 8, 2, 7, 6]), [9, 8, 7]);
    assert.deepEqual(miniPeaks([7, 8, 7, 8, 7, 8, 5, 1, 2, 0]), [8, 8, 8, 2]);
  });
});
