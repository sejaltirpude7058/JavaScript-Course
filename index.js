//To print 
console.log("Hello World!!");
console.log(4+7);
var a = 3
console.log(a, "Members in Parliment")
//Variables declared with the var always have Global Scope
var a = 4.5
a = "Sejal"
console.log(a)
//Variables defined with let can not be redeclared
//Variables declared inside a { } block cannot be accessed from outside the block:
let x = 12;
let b = "Number is lucky";
console.log(x,b)

// Variables defined with const cannot be Redeclared
// Variables defined with const cannot be Reassigned
// Variables defined with const have Block Scope
const pi = 3.1415;
console.log(pi)
//console table to print multiple variables value 
console.table([a,x,b])
//prefer not to use var beacuse of block scope issue and functional block
