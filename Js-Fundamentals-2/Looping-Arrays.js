const aayamArray = [
    'Aayam',
    'Bhatt',
    2025-2002,
    'Full Stack Developer',
    ['Aaryan', 'Ruru', 'Tusky'],
    'Passionate',
    true
];

const types = [];


for(let i = 0; i<aayamArray.length; i++){
    // reading from aayamArray
    console.log(aayamArray[i], typeof aayamArray[i]);

    // filling an array
    types[i] = typeof aayamArray[i];

    // we could also use push method 
}

console.log(types);

const years = [1991, 2007, 2007, 2006];
const ages = [];
for(let i = 0; i<years.length ; i++){
    ages.push(2025-years[i]);
}
console.log(ages);

// continue and break 
console.log("---ONLY STRINGS---");
for(let i = 0; i<aayamArray.length; i++){
    if(typeof aayamArray[i]!=='string') continue;
    console.log(aayamArray[i], typeof aayamArray[i]);

}

console.log("---BREAK WITH NUMBERS---");
for(let i = 0; i<aayamArray.length; i++){
    if(typeof aayamArray[i]==='number') continue;
    console.log(aayamArray[i], typeof aayamArray[i]);

}


