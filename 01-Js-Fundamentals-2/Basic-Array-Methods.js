const langs = ['JavaScript', 'C++', 'Python', 'Go'];
langs.push('SQL');

// add element at first position 
langs.unshift('Node JS');
console.log(langs);

// remove last element 
langs.pop();
console.log(langs);

// remove first element
langs.shift();
console.log(langs);

// check position 
console.log(langs.indexOf('Python'));

// modern method to check if element is there or not 
console.log(langs.includes('JavaScript')); // true
console.log(langs.includes('Java')); // false