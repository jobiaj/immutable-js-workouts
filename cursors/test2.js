//GET RETURN NEW CURSORS ..................\\
'use strict';
var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');

var json = { a: { b: { c: 1 } } };
var data = Immutable.fromJS(json);
var cursor = Cursor.from(data);
var deepCursor = cursor.getIn(['a', 'b']);
console.log(deepCursor); //return cursor {'c' :1 } only
