var Immutable = require('immutable');
var deep = Immutable.Map({ a: 1, b: 2, c: Immutable.List.of(3, 4, 5) });
console.log("to using .toObject method",deep.toObject()); // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
console.log("to using .toArray method",deep.toArray()); // [ 1, 2, List [ 3, 4, 5 ] ]
console.log("to using .toJS method",deep.toJS()); // { a: 1, b: 2, c: [ 3, 4, 5 ] }
console.log("to using JSON.stringfy method" ,JSON.stringify(deep)) // '{"a":1,"b":2,"c":[3,4,5]}'
