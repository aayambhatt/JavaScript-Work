'use strict';

function cutFruits(fruits){
    return fruits*4;
}


function fruitProgram(guavas, bananas){
    const guavaPieces = cutFruits(guavas);
    const bananaPieces = cutFruits(bananas);

    const juice = `juice with ${guavaPieces} piece of guavas and ${bananaPieces} piece of bananas`;
    return juice;
    
} 

console.log(fruitProgram(2,4));