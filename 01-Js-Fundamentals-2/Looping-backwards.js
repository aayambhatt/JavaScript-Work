const aayamArray = [
    'Aayam',
    'Bhatt',
    2025-2002,
    'Full Stack Developer',
    ['Aaryan', 'Ruru', 'Tusky'],
    true
];

//0,1,2,3,4
//4,3,2,1,0

for(let i = aayamArray.length-1 ; i>=0 ; i--){
    console.log(i, aayamArray[i]);

}

// loop inside loop 
for(let exercise = 1 ; exercise<4 ; exercise++){
    console.log(`---STARING EXERCISE ${exercise}`);

    for(let rep = 1; rep<6 ; rep++){
        console.log(`Lifting weight ${rep}`);
    }
}