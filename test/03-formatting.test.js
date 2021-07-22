const assert = require('assert');
const {
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
} = require('../tasks/03-formatting');

describe('03-formatting.test', () => {
  it('keysAndValues', () => {
    assert.deepEqual(keysAndValues({a: 1, b: 2, c: 3}), [['a', 'b', 'c'], [1, 2, 3]]);
    assert.deepEqual(keysAndValues({a: 'Apple', b: 'Microsoft', c: 'Google'}), [['a', 'b', 'c'], ['Apple', 'Microsoft', 'Google']]);
    assert.deepEqual(keysAndValues({key1: true, key2: false, key3: undefined}), [['key1', 'key2', 'key3'], [true, false, undefined]]);
    assert.deepEqual(keysAndValues({1: null, 2: null, 3: null}), [['1', '2', '3'], [null, null, null]]);
    assert.deepEqual(keysAndValues({key1: 'cat', key2: 'dog', key3: null}), [['key1', 'key2', 'key3'], ['cat', 'dog', null]]);
  });

  it('capToFront', () => {
    assert.equal(capToFront('hApPy'), 'APhpy');
    assert.equal(capToFront('moveMENT'), 'MENTmove');
    assert.equal(capToFront('aPPlE'), 'PPEal');
    assert.equal(capToFront('shOrtCAKE'), 'OCAKEshrt');
  });

  it('getMiddle', () => {
    assert.equal(getMiddle('test'), 'es');
    assert.equal(getMiddle('testing'), 't');
    assert.equal(getMiddle('middle'), 'dd');
    assert.equal(getMiddle('A'), 'A');
    assert.equal(getMiddle('inhabitant'), 'bi');
    assert.equal(getMiddle('brown'), 'o');
    assert.equal(getMiddle('pawn'), 'aw');
    assert.equal(getMiddle('cabinet'), 'i');
    assert.equal(getMiddle('fresh'), 'e');
    assert.equal(getMiddle('shorts'), 'or');
  });

  it('reverseArr', () => {
    assert.deepEqual(reverseArr(1485979), [9, 7, 9, 5, 8, 4, 1]);
    assert.deepEqual(reverseArr(623478), [8, 7, 4, 3, 2, 6]);
    assert.deepEqual(reverseArr(12345), [5, 4, 3, 2, 1]);
    assert.deepEqual(reverseArr(202069), [9, 6, 0, 2, 0, 2]);
  });

  it('formatNum', () => {
    assert.equal(formatNum(1000), '1,000');
    assert.equal(formatNum(1000000), '1,000,000');
    assert.equal(formatNum(20), '20');
    assert.equal(formatNum(0), '0');
    assert.equal(formatNum(12948), '12,948');
  });

  it('reverse', () => {
    assert.equal(reverse('Reverse'), 'esreveR');
    assert.equal(reverse('This is a typical sentence.'), 'This is a lacipyt .ecnetnes');
    assert.equal(reverse('The dog is big.'), 'The dog is big.');
    assert.equal(reverse('Reverse the order of every word greater than or equal to five characters.'), 'esreveR the redro of yreve word retaerg than or lauqe to five .sretcarahc');
    assert.equal(reverse('Lets all be unique together until we realise we are all the same.'), 'Lets all be euqinu rehtegot litnu we esilaer we are all the .emas');
    assert.equal(reverse('The old apple revels in its authority.'), 'The old elppa slever in its .ytirohtua');
    assert.equal(reverse('The shooter says goodbye to his love.'), 'The retoohs says eybdoog to his .evol');
    assert.equal(reverse('Please wait outside of the house.'), 'esaelP wait edistuo of the .esuoh');
    assert.equal(reverse('Two seats were vacant.'), 'Two staes were .tnacav');
    assert.equal(reverse('Sixty-Four comes asking for bread.'), 'ruoF-ytxiS semoc gniksa for .daerb');
  });

  it('maskify', () => {
    assert.equal(maskify('4556364607935616'), '############5616');
    assert.equal(maskify('64607935616'), '#######5616');
    assert.equal(maskify('1'), '1');
    assert.equal(maskify(''), '');
    assert.equal(maskify('tBy>L/cMe+?<j:6n;C~H'), '################;C~H');
    assert.equal(maskify('12'), '12');
    assert.equal(maskify('8Ikhlf6yoxPOwi5cB014eWbRumj7vJ'), '##########################j7vJ');
    assert.equal(maskify('123'), '123');
    assert.equal(maskify(')E$aCU=e"_'), '######=e"_');
    assert.equal(maskify('2673951408'), '######1408');
    assert.equal(maskify('1234'), '1234');
  });

  it('getDay', () => {
    assert.equal(getDay('12/07/2016'), 'Wednesday');
    assert.equal(getDay('12/08/2011'), 'Thursday');
    assert.equal(getDay('09/04/2016'), 'Sunday');
    assert.equal(getDay('06/08/2012'), 'Friday');
    assert.equal(getDay('08/13/2019'), 'Tuesday');
  });

  it('fracRound', () => {
    assert.equal(fracRound('1/3', 5), '1/3 rounded to 5 decimal places is 0.33333');
    assert.equal(fracRound('2/8', 4), '2/8 rounded to 4 decimal places is 0.2500');
    assert.equal(fracRound('22/7', 2), '22/7 rounded to 2 decimal places is 3.14');
    assert.equal(fracRound('23/2', 2), '23/2 rounded to 2 decimal places is 11.50');
    assert.equal(fracRound('40/77', 3), '40/77 rounded to 3 decimal places is 0.519');
    assert.equal(fracRound('15/58', 3), '15/58 rounded to 3 decimal places is 0.259');
    assert.equal(fracRound('2/92', 2), '2/92 rounded to 2 decimal places is 0.02');
    assert.equal(fracRound('21/65', 6), '21/65 rounded to 6 decimal places is 0.323077');
    assert.equal(fracRound('29/40', 3), '29/40 rounded to 3 decimal places is 0.725');
    assert.equal(fracRound('49/38', 6), '49/38 rounded to 6 decimal places is 1.289474');
    assert.equal(fracRound('20/69', 3), '20/69 rounded to 3 decimal places is 0.290');
    assert.equal(fracRound('17/46', 6), '17/46 rounded to 6 decimal places is 0.369565');
    assert.equal(fracRound('46/28', 4), '46/28 rounded to 4 decimal places is 1.6429');
    assert.equal(fracRound('12/89', 3), '12/89 rounded to 3 decimal places is 0.135');
    assert.equal(fracRound('9/76', 7), '9/76 rounded to 7 decimal places is 0.1184211');
    assert.equal(fracRound('20/64', 4), '20/64 rounded to 4 decimal places is 0.3125');
    assert.equal(fracRound('28/77', 7), '28/77 rounded to 7 decimal places is 0.3636364');
    assert.equal(fracRound('17/52', 4), '17/52 rounded to 4 decimal places is 0.3269');
    assert.equal(fracRound('21/98', 6), '21/98 rounded to 6 decimal places is 0.214286');
    assert.equal(fracRound('49/61', 4), '49/61 rounded to 4 decimal places is 0.8033');
    assert.equal(fracRound('28/62', 3), '28/62 rounded to 3 decimal places is 0.452');
    assert.equal(fracRound('17/36', 3), '17/36 rounded to 3 decimal places is 0.472');
    assert.equal(fracRound('8/41', 2), '8/41 rounded to 2 decimal places is 0.20');
    assert.equal(fracRound('50/37', 7), '50/37 rounded to 7 decimal places is 1.3513514');
    assert.equal(fracRound('21/41', 3), '21/41 rounded to 3 decimal places is 0.512');
    assert.equal(fracRound('28/47', 6), '28/47 rounded to 6 decimal places is 0.595745');
    assert.equal(fracRound('1/48', 7), '1/48 rounded to 7 decimal places is 0.0208333');
    assert.equal(fracRound('12/58', 6), '12/58 rounded to 6 decimal places is 0.206897');
    assert.equal(fracRound('28/99', 5), '28/99 rounded to 5 decimal places is 0.28283');
    assert.equal(fracRound('24/72', 4), '24/72 rounded to 4 decimal places is 0.3333');
    assert.equal(fracRound('45/90', 3), '45/90 rounded to 3 decimal places is 0.500');
    assert.equal(fracRound('46/85', 5), '46/85 rounded to 5 decimal places is 0.54118');
    assert.equal(fracRound('45/86', 6), '45/86 rounded to 6 decimal places is 0.523256');
    assert.equal(fracRound('42/42', 7), '42/42 rounded to 7 decimal places is 1.0000000');
  });

  it('isValidPhoneNumber', () => {
    assert.equal(isValidPhoneNumber('(123) 456-7890'), true);
    assert.equal(isValidPhoneNumber('(1111)555 2345'), false);
    assert.equal(isValidPhoneNumber('(098) 123 4567'), false);
    assert.equal(isValidPhoneNumber('(123)456-7890'), false);
    assert.equal(isValidPhoneNumber('abc(123)456-7890'), false);
    assert.equal(isValidPhoneNumber('(123)456-7890abc'), false);
    assert.equal(isValidPhoneNumber('abc(123)456-7890abc'), false);
    assert.equal(isValidPhoneNumber('abc(123) 456-7890'), false);
    assert.equal(isValidPhoneNumber('(123) 456-7890abc'), false);
    assert.equal(isValidPhoneNumber('abc(123) 456-7890abc'), false);
    assert.equal(isValidPhoneNumber('(123)-456-7890'), false);
    assert.equal(isValidPhoneNumber('(123)_456-7890'), false);
    assert.equal(isValidPhoneNumber('-123) 456-7890'), false);
    assert.equal(isValidPhoneNumber('(519) 505-6498'), true);
  });
});
