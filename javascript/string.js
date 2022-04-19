// string
let str = "I am a string";
console.log(str);
// length of a string 

let len = str.length;
console.log(len);

// sliced method

let slicedarr = str.slice(2,5);
console.log(slicedarr);

// replace method

let replacedstr= str.replace("am","was");
console.log(replacedstr);

// by doing above method original string does not change

console.log(str);

// uppercase

let uppercase = str.toUpperCase();
console.log(uppercase);

// lowercase

let lowercase = str.toLowerCase();
console.log(lowercase);

// concate 

let firstName ="AKASH";
let lastName ="  UPADHAY";
// let fullName =firstName.concat(lastName);
// console.log(fullName);

// #2 
let fullName = firstName + lastName;
console.log(fullName);

// split
let splitted = str.split(" ");
console.log(splitted);