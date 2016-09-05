/**
 * Created by azad on 8/24/16.
 */


function normalFunction() {
    
    console.log("This is a normal function");
    
}
/**
 * This is an IIFE that will run immediately
 */
(function () {
    console.log("This is a IIFE");
    
})();

let  x = 12

console.log(x);


var myApp = function () {
    
    var privaye_fun = function () {
        console.log("privale fun");
    };
    
    
    return {
        
        public_fun : function () {
                
                console.log("public fun");
                privaye_fun();
        }
        
    };
    
    
}();


myApp.public_fun();