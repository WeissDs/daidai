'use strict';

var _ = require('./3.js');

var sub1 = require('./1.js');
var sub2 = require('./2.js');

console.log(sub1.a + sub2.b);
console.log(sub1.fn(8, 7));

console.log(_.a);