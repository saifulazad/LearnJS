/**
 * Created by azad on 9/6/16.
 */

var base_person = {
    
    first_name : 'Default',
    last_name : 'Default',
    
    full_name : function () {
        return this.first_name + ' ' + this.last_name;
    }
}

var child_preson = {

    first_name : 'Saiful'

}

child_preson.__proto__ = base_person;
console.log(base_person.full_name());
console.log(child_preson.full_name());