//GET RETURN NEW CURSORS using List ..................\\
'use strict';
var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');

var json = { a: { b: { c: 1 } } };
var data = Immutable.fromJS(json);
var cursor = Cursor.from(data);
var deepCursor = cursor.getIn(Immutable.fromJS(['a', 'b']));

console.log(deepCursor);

//cursor return new cursors of correct type...
var data2 = Immutable.fromJS({ a: [1, 2, 3] });
console.log("data ==" ,data2)
var cursor2 = Cursor.from(data2);
console.log("cursor ==" ,cursor2);
var deepCursor = <any>cursor2.cursor2('a');


