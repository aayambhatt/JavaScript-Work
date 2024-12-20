const friends = ['Aayam', 'Aaryan', 'Ruru'];
console.log(friends);

const years = new Array(2002,2006,2008);
console.log(years[1]);

console.log(friends.length);

friends[3]= 'Anamika';
console.log(friends);
console.log(friends.length);

const firstName = "Sunil";
const father = [firstName, 'Sharma', 'Teacher', friends];
console.log(father);

// Exercise 
function calculateAge(birthYear){
    return 2024 - birthYear;
}
const year = [2002,2006,2008,1995];

const age1 = calculateAge(year[0]);
const age2 = calculateAge(year[1]);
const age3 = calculateAge(year[year.length-1]);
console.log(age1,age2,age3);