const assert = require('assert');
const {
  toArray,
  getBudgets,
  isObject,
  nameScore,
  afterNYears,
  isEqual,
  invert,
  mostExpensive,
  toObj,
  getDistance
} = require('../tasks/06-objects');

describe('06-objects.test', () => {
  it('toArray', () => {
    assert.deepEqual(toArray({ a: 1, b: 2 }), [['a', 1], ['b', 2]]);
    assert.deepEqual(toArray({ foo: 33, bar: 45, baz: 67 }), [['foo', 33], ['bar', 45], ['baz', 67]]);
    assert.deepEqual(toArray({ shrimp: 15, tots: 12 }), [['shrimp', 15], ['tots', 12]]);
    assert.deepEqual(toArray({}), []);
  });

  it('getBudgets', () => {
    assert.equal(getBudgets([{name: 'John',  age: 21, budget: 23000}, {name: 'Steve',  age: 32, budget: 40000}, {name: 'Martin',  age: 16, budget: 2700}]), 65700);
    assert.equal(getBudgets([{name: 'John',  age: 21, budget: 29000}, {name: 'Steve',  age: 32, budget: 32000}, {name: 'Martin',  age: 16, budget: 1600}]), 62600);
    assert.equal(getBudgets([{name: 'John',  age: 21, budget: 19401}, {name: 'Steve',  age: 32, budget: 12321}, {name: 'Martin',  age: 16, budget: 1204}]), 32926);
    assert.equal(getBudgets([{name: 'John',  age: 21, budget: 10234}, {name: 'Steve',  age: 32, budget: 21754}, {name: 'Martin',  age: 16, budget: 4935}]), 36923);
  });

  it('isObject', () => {
    assert.equal(isObject(new Date()), true);
    assert.equal(isObject('12/12/2011'), false);
    assert.equal(isObject(null), false);
    assert.equal(isObject([1, 2, 3]), true);
    assert.equal(isObject({}), true);
  });

  it('nameScore', () => {
    assert.equal(nameScore('MUBASHIR'), 'THE BEST');
    assert.equal(nameScore('MATT'), 'THE BEST');
    assert.equal(nameScore('PAKISTAN'), 'THE BEST');
    assert.equal(nameScore('AIRFORCE'), 'THE BEST');
    assert.equal(nameScore('GUV'), 'NOT TOO GOOD');
    assert.equal(nameScore('PUBG'), 'NOT TOO GOOD');
    assert.equal(nameScore('ME'), 'PRETTY GOOD');
    assert.equal(nameScore('BOB'), 'PRETTY GOOD');
    assert.equal(nameScore('JLJ'), 'PRETTY GOOD');
    assert.equal(nameScore('YOU'), 'VERY GOOD');
    assert.equal(nameScore('FABIO'), 'VERY GOOD');
    assert.equal(nameScore('ROBBY'), 'THE BEST');
    assert.equal(nameScore('BILL GATES'), 'THE BEST');
  });

  it('afterNYears', () => {
    assert.deepEqual(afterNYears({
      'Joel' : 32,
      'Fred' : 44,
      'Reginald' : 65,
      'Susan' : 33,
      'Julian' : 13
    }, 1), {
      'Joel' : 33,
      'Fred' : 45,
      'Reginald' : 66,
      'Susan' : 34,
      'Julian' : 14
    });

    assert.deepEqual(afterNYears({
      'Baby' : 2,
      'Child' : 8,
      'Teenager' : 15,
      'Adult' : 25,
      'Elderly' : 71
    }, 19), {
      'Baby' : 21,
      'Child' : 27,
      'Teenager' : 34,
      'Adult' : 44,
      'Elderly' : 90
    });

    assert.deepEqual(afterNYears({
      'Genie' : 1000,
      'Joe' : 40
    }, 5), {
      'Genie' : 1005,
      'Joe' : 45
    });

    assert.deepEqual(afterNYears({
      'Adam' : 0,
      'Eve' : 0
    }, 800), {
      'Adam' : 800,
      'Eve' : 800
    });

    assert.deepEqual(afterNYears({
      'Ambitious Old Scientist' : 87,
      'Ambitious Scientist' : 42,
      'Slightly Concerned Young Scientist' : 23
    }, -35), {
      'Ambitious Old Scientist' : 122,
      'Ambitious Scientist' : 77,
      'Slightly Concerned Young Scientist' : 58
    });

    assert.deepEqual(afterNYears({
      'USA' : 243,
      'Person' : 27
    }, 0), {
      'USA' : 243,
      'Person' : 27
    });
  });

  it('isEqual', () => {
    assert.equal(isEqual({
      name: 'Benny',
      phone: '3325558745',
      email: 'benny@edabit.com'
    }, {
      name: 'Jason',
      phone: '9853759720',
      email: 'jason@edabit.com'
    }), false);
    assert.equal(isEqual({
      name: 'Jason',
      phone: '9853759720',
      email: 'jason@edabit.com'
    }, {
      name: 'Jason',
      phone: '9853759720',
      email: 'jason@edabit.com'
    }), true);

    assert.equal(isEqual({
      names: ['Tom', 'Joe', 'David'],
      fruitIds: {
        orangeId: 77634,
        appleId: 74323,
        bananaId: 09487
      }
    }, {
      names: ['Tom', 'Joe', 'Steve'],
      fruitIds: {
        orangeId: 77634,
        appleId: 74323,
        bananaId: 65970
      }
    }), false);

    assert.equal(isEqual({
      foo: {
        bar: {
          baz: true
        },
        baz: {
          arr: [1, 2, 3]
        }
      }
    }, {
      foo: {
        bar: {
          baz: true
        },
        baz: {
          arr: [3, 2, 1]
        }
      }
    }), false, 'The foo.bar.baz array has changed.');

    assert.equal(isEqual({
      foo: {
        bar: {
          baz: 'edabit.com'
        },
        baz: {
          userIds: {
            jason: 76397,
            steve: 73073,
            joe: 21076
          }
        }
      }
    }, {
      foo: {
        baz: {
          userIds: {
            jason: 76397,
            steve: 73073,
            joe: 21076
          }
        },
        bar: {
          baz: 'edabit.com'
        }
      }
    }), false, 'The order of the object keys has changed.');

    assert.equal(isEqual({
      foo: {
        bar: {
          baz: 'edabit.com'
        },
        baz: {
          userIds: {
            jason: 76397,
            steve: 73073,
            joe: 21076
          }
        }
      }
    }, {
      foo: {
        bar: {
          baz: 'edabit.com'
        },
        baz: {
          userIds: {
            jason: 76397,
            steve: 73073,
            joe: 21076
          }
        }
      }
    }), true);
  });

  it('invert', () => {
    assert.deepEqual(invert({'a': 1, 'b': 2, 'c': 3}), {1: 'a', 2: 'b', 3: 'c'});
    assert.deepEqual(invert({'z': 'q', 'w': 'f'}), {'q': 'z', 'f': 'w'});
    assert.deepEqual(invert({'zebra': 'koala', 'horse': 'camel'}), {'koala': 'zebra', 'camel': 'horse'});
  });

  it('mostExpensive', () => {
    assert.equal(mostExpensive({'Diamond Earrings': 980, 'Gold Watch': 250, 'Pearl Necklace': 4650}), 'The most expensive one is the Pearl Necklace');
    assert.equal(mostExpensive({'Silver Bracelet': 280, 'Gemstone Earrings': 180, 'Diamond Ring': 3500}), 'The most expensive one is the Diamond Ring');
    assert.equal(mostExpensive({'Simple Gold Ring': 310, 'Silver Anklet': 110, 'Crystal Bracelet': 190}), 'The most expensive one is the Simple Gold Ring');
  });

  it('toObj', () => {
    assert.deepEqual(toObj(['a', 'b', 'c']), [{a: 97}, {b: 98}, {c: 99}]);
    assert.deepEqual(toObj(['a', 'p', 'e']), [{a: 97}, {p: 112}, {e: 101}]);
    assert.deepEqual(toObj(['z']), [{z: 122}]);
    assert.deepEqual(toObj(['e', 'o', 'n']), [{e: 101}, {o:111}, {n:110}]);
    assert.deepEqual(toObj([]), []);
  });

  it('getDistance', () => {
    assert.equal(getDistance({x: -2, y: 1}, {x: 4, y: 3}), 6.325, 'Example #1');
    assert.equal(getDistance({x: 0, y: 0}, {x: 1, y: 1}), 1.414, 'Example #2');
    assert.equal(getDistance({x: 10, y: -5}, {x: 8, y: 16}), 21.095, 'Example #3');
    assert.equal(getDistance({x: 4, y: 3}, {x: 3, y: -2}), 5.099);
    assert.equal(getDistance({x: -1, y: -1}, {x: 10, y: 10}), 15.556);
    assert.equal(getDistance({x: 100, y: 100}, {x: 100, y: 100}), 0);
    assert.equal(getDistance({x: 14239, y: -11222}, {x: -12301, y: 12888}), 35856.153);
  });
});
