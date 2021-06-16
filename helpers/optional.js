exports = module.exports = optional;

function optional(str, fn) {
  it(str, function() {
    try {
      fn.call(this);
    } catch (err) {
      if (err.message === 'Have to implemented') {
        this.test.skip();
      } else {
        throw err;
      }
    }
  });
}
