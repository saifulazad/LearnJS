
var x = 12;

var y =x;

x = 34;

console.log(x);
console.log(y);
/**
 * create two objects
 * to scrutinize call by value
 * and call by references
 * :)
 * @type {{name: string}}
 */
var c = {name : 'Azad'};
var d = c;

d.name = 'Saarah';


console.log(c);
console.log(d);
/**
 * create a function to
 * change an object as
 * references
 * @param obj
 */

function changeByRef(obj) {
    obj.name = 'Sumi';

}
/**
 * pass by references
 */
changeByRef(c);

console.log(c);
console.log(d);

/**
 * function as an expression
 * where name is a optional
 * @param firstName
 * @param lastName
 * @returns {string}
 */

var fullName = function(firstName,lastName ) {
    return firstName + ' '+ lastName;
};


var d = {};


d.firstName = 'Saiful' ;
d.lastName = 'Azad';
d.fullName = fullName;

console.log(d.fullName(d.firstName, d.lastName));


var anotherName = {firstName : 'Saarah', lastName : 'Akhand' , fullName : fullName};

console.log(anotherName.fullName(anotherName.firstName, anotherName.lastName));