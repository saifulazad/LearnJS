/**
 * Created by azad on 8/31/16.
 */
/**
 * a problematic way
 * i is not changing only showing 3
 * @returns {Array}
 */
function buitlFunction() {

    var arr = [];

    for (var i = 0; i < 3; i++)
    arr.push(

        function () {
            console.log(i);
        }

    )
    
    return arr;

}

var arr = buitlFunction();

arr[0]();
arr[1]();

arr[2]();

/**
 * grab i to x each time
 * solve for ES6
 * @returns {Array}
 */
function buitlFunction2() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        let x = i;
        arr.push(
            function () {
                console.log(x);
            }
        )
    }
    return arr;

}

var arr2 = buitlFunction2();

arr2[0]();
arr2[1]();

arr2[2]();
/**
 * Support ES5
 * @returns {Array}
 */
function buitlFunction3() {

    var arr = [];

    for (var i = 0; i < 3; i++) {
        arr.push(
            (function (j) {
                return function () {
                    console.log(j);
                }
            })(i)
        );
    }
    return arr;

}

var arr3 = buitlFunction3();

arr3[0]();
arr3[1]();

arr3[2]();