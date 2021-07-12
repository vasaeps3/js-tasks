const assert = require('assert');
const {
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
} = require('../tasks/02-numbers');

describe('02-numbers.test', () => {
  it('derivative', () => {
    assert.equal(derivative(1, 4), 1);
    assert.equal(derivative(3, -2), 12);
    assert.equal(derivative(4, -3), -108);
    assert.equal(derivative(9, -5), 3515625);
    assert.equal(derivative(1254, 0), 0);
    assert.equal(derivative(-2, 10), -0.002);
  });

  it('intWithinBounds', () => {
    assert.equal(intWithinBounds(3, 1, 9), true);
    assert.equal(intWithinBounds(6, 1, 6), false);
    assert.equal(intWithinBounds(4.5, 3, 8), false);
    assert.equal(intWithinBounds(-5, -10, 6), true);
    assert.equal(intWithinBounds(4, 0, 0), false);
    assert.equal(intWithinBounds(10, 9, 11), true);
    assert.equal(intWithinBounds(6.3, 2, 6), false);
    assert.equal(intWithinBounds(6.3, 2, 10), false);
    assert.equal(intWithinBounds(9, 2, 3), false);
    assert.equal(intWithinBounds(9, 9, 9), false);
    assert.equal(intWithinBounds(-3, -5, -2), true);
    assert.equal(intWithinBounds(-3, -5, -3), false);
    assert.equal(intWithinBounds(-3, -10, 10), true);
    assert.equal(intWithinBounds(0, -3, 3), true);
    assert.equal(intWithinBounds(0, 0, 1), true);
    assert.equal(intWithinBounds(7, 7, 12), true);
  });

  it('squareDigits', () => {
    assert.equal(squareDigits(9119), 811181);
    assert.equal(squareDigits(8726), 6449436);
    assert.equal(squareDigits(9763), 8149369);
    assert.equal(squareDigits(2230), 4490);
    assert.equal(squareDigits(2797), 4498149);
    assert.equal(squareDigits(233), 499);
    assert.equal(squareDigits(7437), 4916949);
    assert.equal(squareDigits(2483), 416649);
    assert.equal(squareDigits(5742), 2549164);
    assert.equal(squareDigits(5636), 2536936);
    assert.equal(squareDigits(841), 64161);
  });

  it('tempConversion', () => {
    assert.equal(tempConversion(0), [32, 273.15]);
    assert.equal(tempConversion(100), [212, 373.15]);
    assert.equal(tempConversion(42.8), [109.04, 315.95]);
    assert.equal(tempConversion(300.4), [572.72, 573.55]);
    assert.equal(tempConversion(-10.7), [12.74, 262.45]);
    assert.equal(tempConversion(-273.13), [-459.63, 0.02]);
    assert.equal(tempConversion(-273.16), 'Invalid', 'Wow, is it realy that cold?');
  });

  it('doubleFactorial', () => {
    assert.equal(doubleFactorial(-1), 1);
    assert.equal(doubleFactorial(0), 1);
    assert.equal(doubleFactorial(1), 1);
    assert.equal(doubleFactorial(2), 2);
    assert.equal(doubleFactorial(7), 105);
    assert.equal(doubleFactorial(9), 945);
    assert.equal(doubleFactorial(14), 645120);
    assert.equal(doubleFactorial(22), 81749606400);
    assert.equal(doubleFactorial(25), 7905853580625);
    assert.equal(doubleFactorial(27), 213458046676875);
  });

  it('countOnes', () => {
    assert.equal(countOnes(12), 2);
    assert.equal(countOnes(0), 0);
    assert.equal(countOnes(100), 3);
    assert.equal(countOnes(101), 4);
    assert.equal(countOnes(999), 8);
    assert.equal(countOnes(1e9), 13);
    assert.equal(countOnes(123456789), 16);
    assert.equal(countOnes(1234567890), 12);
  });

  it('rev', () => {
    assert.equal(rev(215), '512');
    assert.equal(rev(122225), '522221');
    assert.equal(rev(215), '512');
    assert.equal(rev(-215), '512', 'Should work with negative numbers.');
    assert.equal(rev(-2152), '2512', 'Should work with negative numbers.');
    assert.equal(rev(-122157), '751221', 'Should work with negative numbers.');
    assert.equal(rev(666), '666', 'Should work if all digits are the same.');
    assert.equal(rev(999), '999', 'Should work if all digits are the same.');
  });

  it('oneOddOneEven', () => {
    assert.equal(oneOddOneEven(10), true);
    assert.equal(oneOddOneEven(11), false);
    assert.equal(oneOddOneEven(12), true);
    assert.equal(oneOddOneEven(13), false);
    assert.equal(oneOddOneEven(14), true);
    assert.equal(oneOddOneEven(15), false);
    assert.equal(oneOddOneEven(16), true);
    assert.equal(oneOddOneEven(17), false);
    assert.equal(oneOddOneEven(18), true);
    assert.equal(oneOddOneEven(19), false);
    assert.equal(oneOddOneEven(20), false);
    assert.equal(oneOddOneEven(21), true);
    assert.equal(oneOddOneEven(22), false);
    assert.equal(oneOddOneEven(23), true);
    assert.equal(oneOddOneEven(24), false);
    assert.equal(oneOddOneEven(25), true);
    assert.equal(oneOddOneEven(26), false);
    assert.equal(oneOddOneEven(27), true);
    assert.equal(oneOddOneEven(28), false);
    assert.equal(oneOddOneEven(29), true);
    assert.equal(oneOddOneEven(30), true);
    assert.equal(oneOddOneEven(31), false);
    assert.equal(oneOddOneEven(32), true);
    assert.equal(oneOddOneEven(33), false);
    assert.equal(oneOddOneEven(34), true);
    assert.equal(oneOddOneEven(35), false);
    assert.equal(oneOddOneEven(36), true);
    assert.equal(oneOddOneEven(37), false);
    assert.equal(oneOddOneEven(38), true);
    assert.equal(oneOddOneEven(39), false);
    assert.equal(oneOddOneEven(40), false);
    assert.equal(oneOddOneEven(41), true);
    assert.equal(oneOddOneEven(42), false);
    assert.equal(oneOddOneEven(43), true);
    assert.equal(oneOddOneEven(44), false);
    assert.equal(oneOddOneEven(45), true);
    assert.equal(oneOddOneEven(46), false);
    assert.equal(oneOddOneEven(47), true);
    assert.equal(oneOddOneEven(48), false);
    assert.equal(oneOddOneEven(49), true);
    assert.equal(oneOddOneEven(50), true);
    assert.equal(oneOddOneEven(51), false);
    assert.equal(oneOddOneEven(52), true);
    assert.equal(oneOddOneEven(53), false);
    assert.equal(oneOddOneEven(54), true);
    assert.equal(oneOddOneEven(55), false);
    assert.equal(oneOddOneEven(56), true);
    assert.equal(oneOddOneEven(57), false);
    assert.equal(oneOddOneEven(58), true);
    assert.equal(oneOddOneEven(59), false);
    assert.equal(oneOddOneEven(60), false);
    assert.equal(oneOddOneEven(61), true);
    assert.equal(oneOddOneEven(62), false);
    assert.equal(oneOddOneEven(63), true);
    assert.equal(oneOddOneEven(64), false);
    assert.equal(oneOddOneEven(65), true);
    assert.equal(oneOddOneEven(66), false);
    assert.equal(oneOddOneEven(67), true);
    assert.equal(oneOddOneEven(68), false);
    assert.equal(oneOddOneEven(69), true);
    assert.equal(oneOddOneEven(70), true);
    assert.equal(oneOddOneEven(71), false);
    assert.equal(oneOddOneEven(72), true);
    assert.equal(oneOddOneEven(73), false);
    assert.equal(oneOddOneEven(74), true);
    assert.equal(oneOddOneEven(75), false);
    assert.equal(oneOddOneEven(76), true);
    assert.equal(oneOddOneEven(77), false);
    assert.equal(oneOddOneEven(78), true);
    assert.equal(oneOddOneEven(79), false);
    assert.equal(oneOddOneEven(80), false);
    assert.equal(oneOddOneEven(81), true);
    assert.equal(oneOddOneEven(82), false);
    assert.equal(oneOddOneEven(83), true);
    assert.equal(oneOddOneEven(84), false);
    assert.equal(oneOddOneEven(85), true);
    assert.equal(oneOddOneEven(86), false);
    assert.equal(oneOddOneEven(87), true);
    assert.equal(oneOddOneEven(88), false);
    assert.equal(oneOddOneEven(89), true);
    assert.equal(oneOddOneEven(90), true);
    assert.equal(oneOddOneEven(91), false);
    assert.equal(oneOddOneEven(92), true);
    assert.equal(oneOddOneEven(93), false);
    assert.equal(oneOddOneEven(94), true);
    assert.equal(oneOddOneEven(95), false);
    assert.equal(oneOddOneEven(96), true);
    assert.equal(oneOddOneEven(97), false);
    assert.equal(oneOddOneEven(98), true);
    assert.equal(oneOddOneEven(99), false);
  });

  it('add', () => {
    assert.equal(add(20)(10), 30);
    assert.equal(add(30)(10), 40);
    assert.equal(add(100)(100), 200);
    assert.equal(add(-30)(80), 50);
    assert.equal(add(-10)(-10), -20);
  });

  it('halveCount', () => {
    assert.equal(halveCount(1891, 4), 8);
    assert.equal(halveCount(1756, 14), 6);
    assert.equal(halveCount(7764, 2), 11);
    assert.equal(halveCount(1118, 47), 4);
    assert.equal(halveCount(161, 79), 1);
    assert.equal(halveCount(8573, 35), 7);
    assert.equal(halveCount(4123, 1), 12);
    assert.equal(halveCount(1348, 60), 4);
    assert.equal(halveCount(7549, 31), 7);
    assert.equal(halveCount(4469, 5), 9);
    assert.equal(halveCount(1123, 98), 3);
    assert.equal(halveCount(8197, 85), 6);
    assert.equal(halveCount(1199, 56), 4);
    assert.equal(halveCount(8845, 4), 11);
    assert.equal(halveCount(606, 67), 3);
    assert.equal(halveCount(3375, 6), 9);
    assert.equal(halveCount(7085, 10), 9);
    assert.equal(halveCount(299, 5), 5);
    assert.equal(halveCount(1208, 82), 3);
    assert.equal(halveCount(3635, 73), 5);
    assert.equal(halveCount(2382, 3), 9);
    assert.equal(halveCount(320, 80), 1);
  });
});
