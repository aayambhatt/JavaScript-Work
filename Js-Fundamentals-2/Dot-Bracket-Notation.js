const aayam = { 
    firstName: 'Aayam',
    lastName: 'Bhatt',
    age: 2025-2002,
    job: 'Full-Stack Developer',
    frens: ['Aaryan', 'Ruru', 'Tusky']
};


console.log(aayam);
console.log(aayam.firstName);
console.log(aayam['lastName']);

const nameKey = 'Name';
console.log(aayam['first' + nameKey]);
console.log((aayam['last'+ nameKey]));

console.log(`${aayam.firstName} has ${aayam.frens.length} friends and, his bestie is called ${aayam.frens[0]}`);