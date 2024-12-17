// Function declaration 
function calculateAge(birthYear){
    return 2024 - birthYear;
}

const age1 = calculateAge(2002);
const age2 = calculateAge(2006);
console.log(age1);
console.log(age2);

// Function expression 
const calclAge = function (birthYear){
    return 2024 - birthYear;
}

const age3 = calclAge(2008);
console.log(age3);