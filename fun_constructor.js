/**
 * Created by azad on 9/19/16.
 */

function Person( first_name, last_name) {

    console.log(this);
    this.first_name = first_name;
    this.last_name = last_name;

    this.full_name = function () {
        return 'Hi ' + this.first_name;
    }
    console.log(this);
}



person = new Person('Azad', 'Vai');

console.log(person.full_name());