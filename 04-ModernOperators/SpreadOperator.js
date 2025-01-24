const arr = [7,8,9];
const badnewarr = [1,2,arr[0], arr[1], arr[2]];
console.log(badnewarr);

// using spread operator
const newarr = [ 1,2, ...arr];
console.log(newarr);

// needing individually elements
console.log(...newarr); //1 2 7 8 9

//iterables 