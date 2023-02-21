// HOF Higher Order Functions
// functions that return a function, allows them to become "new" functions
const multiplyBy = (a) => (b) => { return a * b};

// Currying  (split functions that take only one value at a time)
const multiplyByTwo = multiplyBy(2);
const multiplyByThree = multiplyBy(3);
const multiplyByFive = multiplyBy(5);
const multiplyByTen = multiplyBy(10);
const multiplyByTwenty = multiplyBy(20);

console.log( 'Result = ' + multiplyByFive(5));


// prevent firing more than once using closures
let view;
function initializeView() {
    let initialized = false;
    return function() {
        if (initialized) {
            return;
        }
        else {
            view = 'index page';
            initialized = true;
            console.log('View has been set');
        }
    }
}

const startOnce = initializeView();
startOnce();





// let retains scope per iteration
// However, show how to do it without let
const array = [1, 2, 3, 4];

for (let i=0; i < array.length; i++) {
    (function(ci){
        setTimeout(function(){
            console.log('I am at index ' + array[ci])
        }, 3000)}
    )(i)
}
