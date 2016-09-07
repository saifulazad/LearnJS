/**
 * Created by azad on 9/7/16.
 */

function Person() {

    console.log(this);
    this.first_name = 'Saiful ';
    this.last_name = 'Azad';


}


var person = new Person();


console.log(person);