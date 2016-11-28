/**
 * Created by azad on 11/28/16.
 */


/**
 * Understanding bind .
 * Bind will 
 * 
 **/

var person = {
    first_name : 'Hello',
    last_name : 'Rahim',
    
    full_name : function () {
        return this.first_name + ' '+ this.last_name;
    }
};


var another_person = {
    first_name : 'Hello',
    last_name : 'Karim',
    
};

/**
 * Here we call bind
 * Every function has bind function that receives an object as param and apply
 * it to object. It will return a function.
 *
 * @type {function(this:{first_name: string, last_name: string})}
 */

// Here we want to add full_name to another_person. that will return a function
var fun = person.full_name.bind(another_person);

console.log(fun());


console.log(person.full_name.apply(another_person));


function logger(lan1, lan2) {

    console.log(this.full_name());
    console.log(lan1 + ' ' + lan2);

};


(logger.bind(person, 'en', 'es')());