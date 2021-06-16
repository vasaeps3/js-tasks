const assert = require('assert');

function linesOfCode(fn, expected, recommended) {
  const currentLinesOfCode = fn.toString().split('\n').filter(s => s.trim()).length - 2;
  const isValid = currentLinesOfCode <= expected;

  const messages = [`"${fn.name}" should have at most ${expected} line(s) of code, but it's ${currentLinesOfCode}.`];

  if (recommended && !isValid && currentLinesOfCode > recommended) {
    messages.push(`Recommended lines of code for ${fn.name} is ${recommended}`);
  }

  assert.ok(isValid, messages.join('\n'));
}

assert.linesOfCode = linesOfCode;
