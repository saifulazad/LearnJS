/**
 * Created by azad on 8/7/16.
 */


function Obj() {

    this.firstName = 'Azad';
    this.lastName = 'Vai';

    this.fullName = function () {
        return firstName + ' ' + lastName;
    }

}



console.log(Obj.fullName());