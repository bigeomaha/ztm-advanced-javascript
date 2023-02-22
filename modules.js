//IIFE
const module = (function($){
    // Module pattern
    // $ is a dependency, but is scoped to the module
    const privateMethod = function(){
        console.log('private method');
    }
    return {
        exportedMethod: privateMethod();
    }
})(jquery);



// Webpack and Browserify
// CommonJS
var module1 = require('module1');
var some_function = require('module2').someFunction();

// AMD
define(['module1', 'module2'],
    function(module1Import, module2Import){
        var something = module1Import.doSomething();
        var module2 = module2Import;
        function doSomethingElse(){
            //...
        }
        return {
            export_somthing: doSomethingElse
        }
    }
);

// ES6 Native
/* < script type = "module" > */
import { module1, module2 } from 'module';

const myvar = 'myvar';
export function exportedFunction(){
    //...
}


