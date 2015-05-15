//Immutable always returns itself when a mutation results in an identical collection, allowing for using === equality to determine if something has changed.
var Immutable = require('immutable');
var map1 = Immutable.Map({a:1, b:2, c:3});
var map2 = map1.set('b', 2);
console.log(map1 === map2); // here no change in map1 and map2 so gives true
var map3 = map1.set('b', 50);
console.log(map1 === map3); // here reference changed and so map1 !== map2 return false
