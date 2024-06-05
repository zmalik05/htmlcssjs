for (var i = 0; i < 10; i++) {
    console.log(i);
}

console.log('---------------');

for (var j = 0; j < 10; j++) {
    console.log(j);
    setTimeout(function(){
        console.log("after timeout we have" + j);
    }, 500);
}


console.log(`=========================`);




for (let k = 0; k < 10; k++) {
    console.log(k);
    setTimeout(function(){
        console.log(`after timeout we have a ${k}`);
    }, 2000);
}
