//can be value compared to a primitive
var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');
var json = { a: { b: { c: 1 } } };
var data = Immutable.Map({ a: 'A' });
console.log("data==", data);
var aCursor = Cursor.from(data, 'a');
console.log("aCursor === ", aCursor);
console.log("size of aCursor === ",aCursor.size);
console.log(aCursor.deref());
console.log(Immutable.is(aCursor, 'A'));
