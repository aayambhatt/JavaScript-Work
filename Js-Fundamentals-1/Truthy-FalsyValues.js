// These 5 values will be converted to false when we convert them to boolean
// 5 falsy values: 0, " ", undefined, NaN, Null 

console.log(Boolean(0)); // false 
console.log(Boolean(undefined)); // false 
console.log(Boolean("Aayam")); // true 

const money = 0;

if(money){
    console.log("Dont spend it all");
}
else {
    console.log("You should get a job");
}