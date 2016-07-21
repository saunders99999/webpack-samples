'use strict';

var lib = require('matlock'),
    add = lib.add,
    subtract = lib.subtract,
    result;

result = subtract(add(42, 2), 2);

console.log('result', result);
exports.exampleValue = subtract(add(42, 2), 2);