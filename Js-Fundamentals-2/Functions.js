'use strict';

function logger(){
    console.log("My name is Aayam");
}

// calling/running/invoking functions 
logger();
logger();

function fruitProgram(guavas, bananas){
    const juice = `juice with ${guavas} guavas and ${bananas} bananas`;
    return juice;
    
}

const fruitJuice = fruitProgram(3,4);
console.log(fruitJuice);
