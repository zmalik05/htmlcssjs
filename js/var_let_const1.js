/* The var keyword */

// You can re-declare var
var width = 100;

var width = 200;



// this creates a new local variable
function setWidth(){
    var width = 300;
    // prints 300
    console.log(width);
}
setWidth();

// prints 200
console.log(width);

console.log('-------------------');

function setWidth2(){
    width = 400;
    // prints 400
    console.log(width);
}

setWidth2()

// width has changed in the global scope. prints 400

console.log(width);

console.log('-------------------');

// if statement and templated printing

if (width == 400) {
    var dub = 2*width;
    console.log(`dub is ${dub}, width is ${width}`);
}

console.log(dub);
// dub is available outside the block of the if statement, as in python

console.log('-------------------');
console.log('-------------------');

/* The let keyword */

// `let` is a new kind of variable which has **block scoping**, unlike `var`, which has **function scoping**.


if (width == 400) {
    let dub_let = 2*width;
    console.log(`dub_let is ${dub_let}, width is ${width}`);
}

try {
    console.log(dub_let);
} catch (error) {
    console.log(error);
}

console.log('-------------------');

// let variables can be re-assigned.
let aaa = 3;
console.log(aaa);
aaa = 4;
console.log(aaa);

console.log('-------------------');
