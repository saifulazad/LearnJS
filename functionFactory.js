/**
 * Created by azad on 8/31/16.
 */


function greetingLanguage(language) {

    return (function (name) {
        if (language === 'en'){
            console.log('Hello ' + name);
        }
        else if (language === 'es'){
            console.log('Hola ' + name);
        }


    });
}

var engGreeting = greetingLanguage('en');
var spnGreeting = greetingLanguage('es');


engGreeting('Azad');