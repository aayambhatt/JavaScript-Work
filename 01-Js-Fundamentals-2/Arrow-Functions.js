// Arrow Functions 
const calcAge = birthYear => 2024 - birthYear;
const age1 = calcAge(2002);
console.log(age1);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65-age;
    return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(2002, "Aayam"));