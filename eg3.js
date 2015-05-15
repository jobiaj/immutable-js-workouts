var Immutable = require('immutable');
var list1 = Immutable.List.of(1, 2);
var list2 = list1.push(3, 4, 5);
var list3 = list2.unshift(0);
var list4 = list1.concat(list2, list3);
console.log(list1); //this will print List [1, 2] 
console.log(list1.toJS()) //this will print an array [1, 2] 
console.log(list1.size === 2); //true
console.log("list2 === " ,list2.toJS());
console.log("list3 === " ,list3.toJS());
console.log(list4.size === 13);
console.log(list4.toJS());
