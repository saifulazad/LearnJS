/**
 * Created by azad on 9/7/16.
 */

function Person() {

    console.log(this);
    this.first_name = 'Saiful ';
    this.last_name = 'Azad';
    /**
     * This is private funtion
     */
    function private_fun() {
        console.log('Print from private funtion');
    };
    // public funtion
    this.public_function= function () {

        console.log('Print from public funtion');
        private_fun();

    };
    this.full_name = function () {
        return this.first_name + this.last_name;
    }
}

var person = new Person();
console.log(person);
person.public_function();
console.log(person.full_name());