//GET CURSORS FROM ITS PATH....................\\

'use strict';
var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');

var json = {a: {b: {c: 1}}};
var data = Immutable.fromJS(json);
console.log(data);
var cursor = Cursor.from(data);
console.log(cursor);// cursor to every where a , b & c


//expect(cursor.deref()).toBe(data);
var deepCursor = cursor.cursor(['a', 'b']);
console.log(deepCursor) // cursor is only at c

var leafCursor = deepCursor = deepCursor.cursor('c');
console.log(leafCursor);

//leafCursor = leafCursor.concat({"d":5});

//console.log(leafCursor);

//console.log(leafCursor.get('d')); //1

var missCursor = leafCursor.cursor('e');
console.log(missCursor);

