// empty array

let arr = [];
console.log (arr);

// array with elements

let elearr=[1,2,3,4,5,"hello I am string",false, 'c', 4.5];
console.log(elearr);

// 0 based indexing

console.log("element at 4th index:"+ elearr[4]);
console.log("element at 0th index:"+ elearr[0]);

// replace the index \

elearr[3]= "nothing";

console.log(elearr);

// array methods 
// 1 push -- add item in array atlast
elearr.push("new item");
console.log(elearr);

// pop --- remove elements from last
elearr.pop();
console.log(elearr);

// shift --  remove element from starting point
elearr.shift();
console.log(elearr);

// unshift -- add item on starting point
elearr.unshift("newly added items");
console.log(elearr);

// length
let len = elearr.length;
console.log(len);