//can be treated as a value

'use strict';
var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');

var json = {a: {b: {c : 1}}};
var data = Immutable.fromJS(json);
var cursor = Cursor.from(data, ['a', 'b']);
console.log(cursor);
console.log("CURSOR TO JS =", cursor.toJS());
console.log("JSON.a.b = ",json.a.b);
console.log("cursor.size == ",cursor.size);
console.log(cursor.get('c'));

console.log("According to these testing cursor should be treated as a value, andtoJS() === json.a.b, and cursor === data.getIn(['a','b'], and cursor.size === cursor.get('c') ===1") 
