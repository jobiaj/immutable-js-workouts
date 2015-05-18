'use strict';
var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');

var data = Immutable.fromJS({ a: { b: { c: 1 } } });
var cursor = Cursor.from(data, ['a', 'b'], newData => {
  data = newData;
});
console.log(cursor);

console.log(cursor.get('c')); // 1
cursor = cursor.update('c', x => x + 1);
console.log(cursor.get('c')); // 2

data.getIn(['a','b','c']);
console.log(data);
