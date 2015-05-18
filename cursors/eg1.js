//Cursors allow to hold a reference to a path in a nested immutable data structure, allowing you to pass smaller sections of a larger nested collection to portions of your application while maintaining a central point aware of changes to the entire data structure: an onChange function which is called whenever a cursor or sub-cursor calls update.

var Immutable = require('immutable');
var Cursor = require('immutable/contrib/cursor');

var data = Immutable.fromJS({ a: { b: { c: 1 } } });

//console.log(data);
var cursor = Cursor.from(data, ['a', 'b'], function(newData) {
  data = newData;
});

//here cursor point to c only so we can do operations on c
console.log(cursor.get('b')); //undefined
console.log(cursor.get('c'));//gives 1 

cursor = cursor.update('c',function(x) { (x = x+1); } );

console.log("after updation",cursor.get('c')) //2

data.getIn(['a', 'b', 'c']); //2

